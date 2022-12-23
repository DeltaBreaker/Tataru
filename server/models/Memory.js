const { Schema, model } = require("mongoose");

const memorySchema = new Schema({
  event: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  uploads: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  uploader: {
    type: String,
    ref: "member",
  },
});

const Memory = model("memory", memorySchema);

module.exports = Memory;
