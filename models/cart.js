const mongoose = require("mongoose");
const { Schema } = mongoose;
const cartSchema = new Schema({
  inputEmail: { type: String },
  inputNames: { type: String },
  inputQty: { type: String },
  inputSum: { type: String },
});

module.exports = mongoose.model("Cart", cartSchema);
