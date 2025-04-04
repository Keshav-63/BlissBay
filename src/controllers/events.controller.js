import Event from "../models/events.model.js";

export const createEvent = async (req, res) => {
  try {
      const event = new Event(req.body);
    console.log("event", event);
    await event.save();
    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
      console.log("error", error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event updated successfully", event });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
