import express from "express";
import {
  addSecurityPersonnel,
  getAllSecurityPersonnel,
  updateSecurityPersonnel,
  deleteSecurityPersonnel,
} from "../controllers/security.controller.js";

const router = express.Router();

router.post("/add", addSecurityPersonnel); 

router.get("/", getAllSecurityPersonnel); 

router.put("/update/:id", updateSecurityPersonnel);

router.delete("/delete/:id", deleteSecurityPersonnel); 

export default router;
