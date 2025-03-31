import express from "express";
import {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
} from "../controllers/events.controller.js";

const router = express.Router();

router.post("/add", createEvent); 

router.get("/", getAllEvents);

router.put("/update/:id", updateEvent); 

router.delete("/delete/:id", deleteEvent); 

export default router;
