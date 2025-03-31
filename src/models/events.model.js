import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    organizer: { type: String, required: true },
    contactInfo: { type: String, required: true },
    category: { type: String, required: true },
    status: {
      type: String,
      default: "upcoming",
    },
    expectedAttendees: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);
export default Event;
