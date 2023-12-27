const mongoose = require("mongoose");
// const yourDataSchema = new mongoose.Schema({
//   id: Number,
//   CPU: Number,
//   "GPU VRAM": String,
//   "RAM Utilization": String,
//   AvgTemp: {
//     PowerUtilization: String,
//     Temperature: String,
//   },
//   categories: [String],
//   data: [Number],
// });

const YourData = new mongoose.Schema({
  id: Number,
  CPU: Number,
  "GPU VRAM": String,
  "RAM Utilization": String,
  "Avg Temp": String, // Change to String if it includes units or special characters
  PowerUtilization: String,
  Temperature: String,
  categories: [String],
  data: [Number],
});

// const serverData = new mongoose.Schema({
//   id: {
//     type: Number,
//   },
//   CPU: {
//     type: Number,
//   },
// });

// Create a model based on the schema
const YourDataModel = mongoose.model("YourData", YourData);
module.exports = YourDataModel;
