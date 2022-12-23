const CLIENT_ID = "938029578272780288";

const fetch = require("node-fetch");
const { request } = require("express");
const { Client, Intents } = require("discord.js");
const { Memory, Member } = require("../models");

let requests = {};

function setupFunctions(client) {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    switch (interaction.commandName) {
      case "remember":
        await createMemory(interaction);
        break;

      case "nevermind":
        requests[interaction.user.id] = {};
        interaction.reply("> No problem!");
        break;

      case "register":
        await createMember(interaction);
        break;
    }
  });
  client.on("messageCreate", async (message) => {
    if (!message.interaction && message.author.id != CLIENT_ID) {
      await handleInput(message);
    }
  });
}

async function handleInput(message) {
  switch (requests[message.author.id]?.request) {
    case "remember":
      switch (requests[message.author.id].state) {
        case "name":
          requests[message.author.id].event = message.content;
          requests[message.author.id].state = "description";
          message.reply("> What is this for?");
          break;

        case "description":
          requests[message.author.id].description = message.content;
          requests[message.author.id].state = "upload";
          message.reply(
            "> Ok, send me some pics! Say 'done' when you're finished!"
          );
          break;

        case "upload":
          message.attachments.forEach((element) => {
            if (/\.(gif|jpe?g|png|webp|bmp)$/i.test(element.url)) {
              requests[message.author.id].uploads.push(element.url);
            }
          });

          if (message.content.toLowerCase() == "done") {
            requests[message.author.id].uploader = message.author.id;
            await postMemory(requests[message.author.id], message);
            requests[message.author.id] = {};
          }
          break;
      }
      break;

    case "register":
      switch (requests[message.author.id].state) {
        case "url":
          const url = message.content.split("/");
          let index = 1;
          let id = url[url.length - index];

          while ((!id || isNaN(id)) && index <= url.length) {
            id = url[url.length - index];
            index++;
          }

          if (isNaN(id)) {
            message.reply(
              "> Sorry, that link doesn't seem to be right. Try a different one."
            );
            return;
          }

          let memberData = { _id: message.author.id, memberID: id };
          const response = await fetch("https://xivapi.com/character/" + id);
          if (response.ok) {
            const data = await response.json();
            if (data.Character.Name) {
              memberData.memberName = data.Character.Name;

              try {
                await message.member.setNickname(
                  message.author.username +
                    " (" +
                    data.Character.Name.split(" ")[0] +
                    ")"
                );
              } catch (e) {}

              try {
                await Member.create(memberData).then((json) => {
                  message.reply(
                    "> You are now registered as: " + json.memberName
                  );
                });
                requests[interaction.user.id] = {};
              } catch (e) {
                if (e.code == 11000) {
                  message.reply("> That account is already registered");
                }
              }

              return;
            }

            message.reply("> Sorry, something went wrong. Please try again.");
            return;
          }

          message.reply("> Sorry, something went wrong. Please try again.");
          break;
      }
      break;
  }
}

async function createMemory(interaction) {
  const exists = await Member.exists({ _id: interaction.user.id });

  if (!exists) {
    interaction.reply(
      "> Sorry, you need to be registered to upload. Use /register"
    );
    return;
  }

  requests[interaction.user.id] = {
    request: "remember",
    state: "name",
    uploads: [],
  };
  await interaction.reply("> What should I name this?");
}

async function createMember(interaction) {
  requests[interaction.user.id] = {
    request: "register",
    state: "url",
    _id: interaction.user.id,
    username: interaction.user.username,
  };
  await interaction.reply(
    "> Please send the URL of your loadstone character profile.\n> Example: https://na.finalfantasyxiv.com/lodestone/character/36437734/"
  );
}

async function postMemory(memory, message) {
  await Memory.create(memory).then((json) => {
    message.reply(
      //https://linktowebsite/memory/
      "> Alright, here you go! placeholder" + json._id
    );
  });
}

module.exports = {
  setupFunctions,
};
