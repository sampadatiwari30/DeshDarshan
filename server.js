const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP connection error:", error);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

// Route to handle contact form submission
app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      state,
      collaborationType,
      collegeName,
      researchTopic,
      companyName,
      experience,
      otherSpecify,
      message,
    } = req.body;

    // Validation
    if (!name || !email || !phone || !state || !collaborationType || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    // Prepare collaboration details based on type
    let collaborationDetails = "";
    switch (collaborationType) {
      case "student":
        collaborationDetails = `College Name: ${collegeName || "Not provided"}`;
        break;
      case "researcher":
        collaborationDetails = `Research Topic: ${
          researchTopic || "Not provided"
        }`;
        break;
      case "job":
        collaborationDetails = `Company: ${
          companyName || "Not provided"
        }\nExperience: ${experience || "Not provided"} years`;
        break;
      case "other":
        collaborationDetails = `Specification: ${
          otherSpecify || "Not provided"
        }`;
        break;
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, 
      subject: `New Collaboration Request from ${name} - DeshDarshan`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ff6b35; margin: 0;">🛕 DeshDarshan</h1>
            <h2 style="color: #333; margin: 10px 0;">New Collaboration Request</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>State/UT:</strong> ${state}</p>
          </div>

          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Collaboration Details</h3>
            <p><strong>Type:</strong> ${
              collaborationType.charAt(0).toUpperCase() +
              collaborationType.slice(1)
            }</p>
            ${
              collaborationDetails
                ? `<p><strong>Additional Info:</strong><br>${collaborationDetails.replace(
                    /\n/g,
                    "<br>"
                  )}</p>`
                : ""
            }
          </div>

          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              This email was sent from the DeshDarshan contact form.<br>
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Your collaboration request has been sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

// Serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve contact page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "contact-us.html"));
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "DeshDarshan server is running!",
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 DeshDarshan server is running on http://localhost:${PORT}`);
  console.log(`📧 Contact form available at: http://localhost:${PORT}/contact`);
  console.log(`💊 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
