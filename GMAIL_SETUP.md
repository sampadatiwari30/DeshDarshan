# Gmail SMTP Setup Guide for DeshDarshan Contact Form

This guide will help you set up Gmail SMTP to receive contact form submissions directly in your Gmail inbox.

## Prerequisites

1. A Gmail account
2. Node.js installed on your system
3. Basic knowledge of environment variables

## Step 1: Enable 2-Factor Authentication on Gmail

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to "Security" → "2-Step Verification"
3. Follow the instructions to enable 2-factor authentication

## Step 2: Generate App Password

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to "Security" → "App passwords"
3. Select "Mail" as the app and "Other" as the device
4. Enter "DeshDarshan Contact Form" as the device name
5. Click "Generate"
6. **Copy the 16-character password** (you'll need this for the .env file)

## Step 3: Configure Environment Variables

1. Open the `.env` file in the DeshDarshan root directory
2. Replace the placeholder values with your actual credentials:

```env
GMAIL_USER=your-actual-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
PORT=3000
```

**Important**:

- Use the 16-character app password, NOT your regular Gmail password
- Never commit the .env file to version control (it's already in .gitignore)

## Step 4: Install Dependencies

Open a terminal in the DeshDarshan directory and run:

```bash
npm install
```

## Step 5: Start the Server

Run one of these commands:

```bash
# For production
npm start

# For development (with auto-restart)
npm run dev
```

