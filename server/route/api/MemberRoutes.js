const fetch = require("node-fetch");
const router = require("express").Router();
const path = require("path");
const { Memory } = require("../../models");

const memberList = {};
const memberData = {};

router.get("/", async (req, res) => {
  try {
    if (memberList.FreeCompanyMembers && notExpired(memberList.updatedAt)) {
      res.json(memberList);
      return;
    }
    let response = await fetch(
      "https://xivapi.com/freecompany/9231112598714449394?data=FCM"
    );
    if (response.ok) {
      memberList.FreeCompanyMembers = (
        await response.json()
      ).FreeCompanyMembers;
      memberList.updatedAt = Date.now();
      res.json(memberList);
      return;
    }

    res.json({ message: "Could not get member list" });
  } catch (e) {
    console.log(e);
    res.json({ message: "There was an error" });
  }
});

router.get("/:id", async (req, res) => {
  const memberID = req.params.id;
  if (memberData[memberID] && notExpired(memberData[memberID].updatedAt)) {
    res.json(memberData[memberID]);
    return;
  }

  console.log(
    "Player data for " +
      memberID +
      " is either not present or expired. Updating."
  );
  const response = await fetch("https://xivapi.com/character/" + memberID);
  if (response.ok) {
    const data = await response.json();
    memberData[memberID] = { ...data, updatedAt: Date.now() };
    res.json(data);
    return;
  }
  res.json({ message: "Error loading player data" });
});

function notExpired(time) {
  const diff = Date.now() - time;
  return diff < 36000000;
}

module.exports = router;
