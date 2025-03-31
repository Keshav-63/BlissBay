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



// export const sendVerificationEmail = async (email, verificationToken) => {
//   const mailOptions = {
//     from: "govgenie.info@gmail.com",
//     to: email,
//     subject: "Verify your email",
//     html: VERIFICATION_EMAIL_TEMPLATE.replace(
//       "{verificationCode}",
//       verificationToken
//     ),
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Verification email sent successfully!");
//   } catch (error) {
//     console.error("Error sending verification email:", error.toString());
//     throw new Error("Error sending verification email");
//   }
// };

// export const sendWelcomeEmail = async (email, name) => {
//   const mailOptions = {
//     from: "govgenie.info@gmail.com",
//     to: email,
//     subject: "Welcome to GovGenie",
//     html: `<p>Hi ${name},</p><p>Welcome to GovGenie!</p>`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Welcome email sent successfully!");
//   } catch (error) {
//     console.error("Error sending welcome email:", error.toString());
//     throw new Error("Error sending welcome email");
//   }
// };

// export const sendPasswordResetEmail = async (email, resetURL) => {
//   const mailOptions = {
//     from: "govgenie.info@gmail.com",
//     to: email,
//     subject: "Reset your password",
//     html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Password reset email sent successfully!");
//   } catch (error) {
//     console.error("Error sending password reset email:", error.toString());
//     throw new Error("Error sending password reset email");
//   }
// };

// export const sendResetSuccessEmail = async (email) => {
//   const mailOptions = {
//     from: "govgenie.info@gmail.com",
//     to: email,
//     subject: "Password Reset Successful",
//     html: PASSWORD_RESET_SUCCESS_TEMPLATE,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Password reset success email sent successfully!");
//   } catch (error) {
//     console.error(
//       "Error sending password reset success email:",
//       error.toString()
//     );
//     throw new Error("Error sending password reset success email");
//   }
// };
