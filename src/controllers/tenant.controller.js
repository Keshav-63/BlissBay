import Tenant from "../models/tenant.model.js";
import { sendTenantEmail } from "../mail/emails.js"; 

export const createTenant = async (req, res) => {
  try {
    const newTenant = new Tenant(req.body);
    console.log("newTenant", newTenant);
    await newTenant.save();

    await sendTenantEmail(newTenant);
    res
      .status(201)
      .json({ message: "Tenant added successfully", tenant: newTenant });
  } catch (error) {
      console.log("error", error);
    res.status(400).json({ error: error.message });
  }
};

export const getAllTenants = async (req, res) => {
  try {
    const tenants = await Tenant.find();
    res.status(200).json(tenants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTenant = async (req, res) => {
  try {
    const updatedTenant = await Tenant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    res
      .status(200)
      .json({ message: "Tenant updated successfully", tenant: updatedTenant });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTenant = async (req, res) => {
  try {
    const deletedTenant = await Tenant.findByIdAndDelete(req.params.id);
    if (!deletedTenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    res.status(200).json({ message: "Tenant deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
