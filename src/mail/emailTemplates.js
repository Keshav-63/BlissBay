export const generateTenantEmailTemplate = (tenant) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Welcome to Our Mall</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: #0073e6; color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0; font-size: 20px; }
            .content { padding: 20px; text-align: left; color: #333; }
            .details { background: #f8f8f8; padding: 15px; border-radius: 5px; margin-top: 10px; }
            .details ul { list-style: none; padding: 0; }
            .details ul li { padding: 5px 0; border-bottom: 1px solid #ddd; }
            .footer { text-align: center; padding: 10px; font-size: 14px; color: #666; }
            .footer a { color: #0073e6; text-decoration: none; }
        </style>
    </head>
    <body>
    <div class="container">
        <div class="header">
            🎉 Welcome to Our Mall, ${tenant.name}!
        </div>
        <div class="content">
            <p>Dear <b>${tenant.contactPerson}</b>,</p>
            <p>We are excited to have you as part of our community. Below are your lease details:</p>
            <div class="details">
                <ul>
                    <li><b>Category:</b> ${tenant.category}</li>
                    <li><b>Location:</b> ${tenant.location}</li>
                    <li><b>Lease Start:</b> ${tenant.leaseStart}</li>
                    <li><b>Lease End:</b> ${tenant.leaseEnd}</li>
                    <li><b>Monthly Rent:</b> ₹${tenant.rentAmount}</li>
                    <li><b>Status:</b> ${tenant.status}</li>
                </ul>
            </div>
            <p>We look forward to working together and making this a great experience for you.</p>
            <p>For any queries, feel free to <a href="mailto:support@mallmanagement.com">contact us</a>.</p>
            <p>Best Regards,<br><b>BlissBay Management Team</b></p>
        </div>
        <div class="footer">
            &copy; 2025 BlissBay Management | <a href="#">Visit Our Website</a>
        </div>
    </div>
    </body>
    </html>
  `;
};

export const generateMaintenanceEmailTemplate = (maintenance) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Maintenance Request Update</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: #d9534f; color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0; font-size: 20px; }
            .content { padding: 20px; text-align: left; color: #333; }
            .details { background: #f8f8f8; padding: 15px; border-radius: 5px; margin-top: 10px; }
            .details ul { list-style: none; padding: 0; }
            .details ul li { padding: 5px 0; border-bottom: 1px solid #ddd; }
            .footer { text-align: center; padding: 10px; font-size: 14px; color: #666; }
            .footer a { color: #d9534f; text-decoration: none; }
        </style>
    </head>
    <body>
    <div class="container">
        <div class="header">
            🛠️ Maintenance Request Update
        </div>
        <div class="content">
            <p>Dear <b>${maintenance.requestedBy}</b>,</p>
            <p>Your maintenance request "<b>${
              maintenance.title
            }</b>" has been **${maintenance.status}**.</p>
            <div class="details">
                <ul>
                    <li><b>Issue Type:</b> ${maintenance.category}</li>
                    <li><b>Description:</b> ${maintenance.description}</li>
                    <li><b>Location:</b> ${maintenance.location}</li>
                    <li><b>Request Date:</b> ${new Date(
                      maintenance.dateRequested
                    ).toDateString()}</li>
                    <li><b>Priority:</b> ${
                      maintenance.priority.charAt(0).toUpperCase() +
                      maintenance.priority.slice(1)
                    }</li>
                    <li><b>Assigned To:</b> ${
                      maintenance.assignedTo
                        ? maintenance.assignedTo
                        : "Not Assigned Yet"
                    }</li>
                    <li><b>Status:</b> ${
                      maintenance.status.charAt(0).toUpperCase() +
                      maintenance.status.slice(1)
                    }</li>
                </ul>
            </div>
            <p>We are working to resolve your issue as soon as possible. If you have any questions, please reach out.</p>
            <p>For any further assistance, feel free to <a href="mailto:support@mallmanagement.com">contact us</a>.</p>
            <p>Best Regards,<br><b>BlissBay Maintenance Team</b></p>
        </div>
        <div class="footer">
            &copy; 2025 BlissBay Management | <a href="#">Visit Our Website</a>
        </div>
    </div>
    </body>
    </html>
  `;
};


export const generateSecurityEmailTemplate = (security) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Security Assignment Details</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background:rgb(10, 159, 15); color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0; font-size: 20px; }
            .content { padding: 20px; text-align: left; color: #333; }
            .details { background: #f8f8f8; padding: 15px; border-radius: 5px; margin-top: 10px; }
            .details ul { list-style: none; padding: 0; }
            .details ul li { padding: 8px 0; border-bottom: 1px solid #ddd; }
            .footer { text-align: center; padding: 10px; font-size: 14px; color: #666; }
            .footer a { color:rgb(10, 159, 15); text-decoration: none; }
        </style>
    </head>
    <body>
    <div class="container">
        <div class="header">
            🛡️ Security Assignment - ${security.name}
        </div>
        <div class="content">
            <p>Dear <b>${security.name}</b>,</p>
            <p>We are pleased to inform you of your security assignment details:</p>
            <div class="details">
                <ul>
                    <li><b>Position:</b> ${security.position}</li>
                    <li><b>Shift:</b> ${security.shift}</li>
                    <li><b>Phone:</b> ${security.phone}</li>
                    <li><b>Email:</b> ${security.email}</li>
                    <li><b>Join Date:</b> ${new Date(
                      security.joinDate
                    ).toDateString()}</li>
                    <li><b>Status:</b> ${
                      security.status.charAt(0).toUpperCase() +
                      security.status.slice(1)
                    }</li>
                </ul>
            </div>
            <p>Please ensure you adhere to all security protocols and report on time.</p>
            <p>If you have any questions, feel free to <a href="mailto:support@mallsecurity.com">contact us</a>.</p>
            <p>Best Regards,<br><b>BlissBay Security Team</b></p>
        </div>
        <div class="footer">
            &copy; 2025 BlissBay Security | <a href="#">Visit Our Website</a>
        </div>
    </div>
    </body>
    </html>
  `;
};
