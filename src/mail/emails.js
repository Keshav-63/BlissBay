import nodemailer from "nodemailer";
import {
  generateTenantEmailTemplate,
  generateMaintenanceEmailTemplate,
  generateSecurityEmailTemplate,
} from "./emailTemplates.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const sendTenantEmail = async ( tenant ) => {
  const mailOptions = {
    from: process.env.GMAIL,
    to: tenant.email,
    subject: `Welcome to Our Mall, ${tenant.name}!`,
    html: generateTenantEmailTemplate(tenant),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Tenant Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error.toString());
    throw new Error("Error sending email");
  }
};


export const sendMaintenanceEmail = async ( maintenance ) => {
  const mailOptions = {
    from: process.env.GMAIL,
    to: maintenance.assignedTo,
    subject: `Maintenance request, ${maintenance.title}!`,
    html: generateMaintenanceEmailTemplate(maintenance),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Maintenance Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error.toString());
    throw new Error("Error sending email");
  }
};

export const sendSecurityEmail = async ( security ) => {
  const mailOptions = {
    from: process.env.GMAIL,
    to: security.email,
    subject: `Welcome to Our Mall, ${security.name}!`,
    html: generateSecurityEmailTemplate(security),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Security Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error.toString());
    throw new Error("Error sending email");
  }
};

