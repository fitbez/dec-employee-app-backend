const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    callMobile: {
      type: String,
      required: true,
    },
    callOffice: {
      type: String,
      required: true,
    },
    sms: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

//creating our model and export it
module.exports = mongoose.model("Employee", EmployeeSchema);
