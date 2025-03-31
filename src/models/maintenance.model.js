import mongoose from "mongoose";

const MaintenanceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    location: {
      type: String,
    },
    requestedBy: {
      type: String,
    },
    contactInfo: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    dateRequested: {
      type: Date,
      default: Date.now,
    },
    assignedTo: {
      type: String, // Email of the assigned person
      lowercase: true,
    },
  },
  { timestamps: true }
);

const Maintenance = mongoose.model("Maintenance", MaintenanceSchema);
export default Maintenance;