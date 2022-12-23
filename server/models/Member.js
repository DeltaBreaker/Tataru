const { Schema, model } = require("mongoose");

const memberSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  memberID: {
    type: String,
    required: true,
    unique: true,
  },
  memberName: {
    type: String,
    required: true,
  },
});

const Member = model("member", memberSchema);

module.exports = Member;
