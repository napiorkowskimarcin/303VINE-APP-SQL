const mongoose = require("mongoose");
const { Schema } = mongoose;

const vineSchema = new Schema({
  vineName: {
    type: String,
    required: [true, "Vine name is required,please"],
  },
  vineType: {
    type: String,
    default: "White",
    enum: ["White", "Red"],
  },
  vineCountry: {
    type: String,
    default: "Italy",
    enum: ["Italy", "France", "Spain", "Germany", "Poland", "Hungary"],
  },
  vineRate: {
    type: String,
    default: "table wivinene",
    enum: ["table vine", "good choice", "excelent choice"],
  },
  vinePrice: {
    type: Number,
    required: [true, "Price is required, please"],
  },
  // vineDescription: {
  //   type: String,
  //   required: [true, "Description is requried, please"],
  // },
});

module.exports = mongoose.model("Vine", vineSchema);
