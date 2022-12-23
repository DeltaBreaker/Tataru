const CLIENT_ID = "938029578272780288";

const { REST, Routes, Client, GatewayIntentBits } = require("discord.js");
const DiscordClient = require("./DiscordClient.js");
require("dotenv").config();

const COMMANDS = [
  {
    name: "remember",
    description: "Used to add a memory to the FC website",
  },
  {
    name: "nevermind",
    description: "Used to clear any active requests",
  },
  {
    name: "register",
    description: "Allows user to upload by linking their FFXIV character",
  },
];

async function start() {
  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

  try {
    await rest.put(Routes.applicationCommands(CLIENT_ID), {
      body: COMMANDS,
    });
    console.log("Successfully reloaded application (/) commands.");

    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
    });

    client.on("ready", () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    DiscordClient.setupFunctions(client);

    client.login(process.env.DISCORD_TOKEN);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  start,
};
