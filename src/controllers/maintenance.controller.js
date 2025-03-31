import Maintenance from "../models/maintenance.model.js";
import { sendMaintenanceEmail } from "../mail/emails.js";

export const createMaintenanceRequest = async (req, res) => {
  try {
    const newRequest = new Maintenance(req.body);
    await newRequest.save();
    await sendMaintenanceEmail(newRequest);
    res
      .status(201)
      .json({ message: "Maintenance request created", newRequest });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllMaintenanceRequests = async (req, res) => {
  try {
    const requests = await Maintenance.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMaintenanceRequest = async (req, res) => {
  try {
    const updatedRequest = await Maintenance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRequest)
      return res.status(404).json({ message: "Request not found" });
    res.status(200).json({ message: "Request updated", updatedRequest });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMaintenanceRequest = async (req, res) => {
  try {
    const deletedRequest = await Maintenance.findByIdAndDelete(req.params.id);
    if (!deletedRequest)
      return res.status(404).json({ message: "Request not found" });
    res.status(200).json({ message: "Request deleted", deletedRequest });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
