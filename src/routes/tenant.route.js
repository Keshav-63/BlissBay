import express from "express";
const router = express.Router();
import { createTenant, getAllTenants, updateTenant, deleteTenant } from "../controllers/tenant.controller.js";


router.post("/add", createTenant);

router.get("/", getAllTenants);

router.put("/update/:id", updateTenant);

router.delete("/delete/:id", deleteTenant);

export default router;
