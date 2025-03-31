import mongoose from "mongoose";

const SecuritySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    shift: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    joinDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

const Security = mongoose.model("Security", SecuritySchema);
export default Security;
