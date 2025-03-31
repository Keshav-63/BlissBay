import Security from "../models/security.model.js";
import { sendSecurityEmail } from "../mail/emails.js"; 

export const addSecurityPersonnel = async (req, res) => {
  try {
      const newSecurity = new Security(req.body);
      console.log("newSecurity", newSecurity);
      await newSecurity.save();
      await sendSecurityEmail(newSecurity);
    res
      .status(201)
      .json({
        message: "Security personnel added successfully!",
        data: newSecurity,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding personnel", error: error.message });
  }
};

export const getAllSecurityPersonnel = async (req, res) => {
  try {
    const personnel = await Security.find();
    res.status(200).json(personnel);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving personnel", error: error.message });
  }
};

export const updateSecurityPersonnel = async (req, res) => {
  try {
    const updatedPersonnel = await Security.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPersonnel) {
      return res.status(404).json({ message: "Personnel not found" });
    }
    res
      .status(200)
      .json({
        message: "Personnel updated successfully",
        data: updatedPersonnel,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating personnel", error: error.message });
  }
};

export const deleteSecurityPersonnel = async (req, res) => {
  try {
    const deletedPersonnel = await Security.findByIdAndDelete(req.params.id);
    if (!deletedPersonnel) {
      return res.status(404).json({ message: "Personnel not found" });
    }
    res.status(200).json({ message: "Personnel deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting personnel", error: error.message });
  }
};
