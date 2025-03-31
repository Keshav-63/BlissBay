import express from "express";

import {
  createMaintenanceRequest,
  getAllMaintenanceRequests,
  updateMaintenanceRequest,
  deleteMaintenanceRequest,
} from "../controllers/maintenance.controller.js";

const router = express.Router();

router.post("/add", createMaintenanceRequest); 

router.get("/", getAllMaintenanceRequests); 

router.put("/update/:id", updateMaintenanceRequest); 

router.delete("/delete/:id", deleteMaintenanceRequest);

export default router;
