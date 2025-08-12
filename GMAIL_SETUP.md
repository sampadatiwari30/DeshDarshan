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

## Step 6: Test the Setup

1. Open your browser and go to `http://localhost:3000/contact`
2. Fill out the contact form and submit it
3. Check your Gmail inbox for the email

## Email Template

The emails you receive will include:

- **Subject**: "New Collaboration Request from [Name] - DeshDarshan"
- **Formatted HTML email** with:
  - Contact information (name, email, phone, state)
  - Collaboration type and details
  - The user's message
  - Reply-to functionality (you can reply directly to the user)

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**:

   - Make sure 2-factor authentication is enabled
   - Use the app password, not your regular password
   - Check that the email address is correct

2. **"SMTP connection error"**:

   - Check your internet connection
   - Verify the app password is correct
   - Make sure Gmail SMTP is not blocked by your firewall

3. **Form submission fails**:
   - Check that the server is running on port 3000
   - Open browser developer tools to see any console errors
   - Verify the API endpoint `/api/contact` is accessible

### Test SMTP Connection:

You can test your SMTP configuration by visiting:
`http://localhost:3000/api/health`

### Debug Mode:

To see detailed error messages, check the terminal/console where you started the server.

## Security Notes

- **Never share your app password** or commit it to version control
- **Use environment variables** for all sensitive information
- **Regularly rotate your app passwords** for better security
- **Consider using OAuth2** for production applications

## File Structure

```
DeshDarshan/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (not in git)
├── .gitignore             # Git ignore file
├── pages/
│   └── contact-us.html    # Contact form (updated with AJAX)
└── GMAIL_SETUP.md         # This guide
```

## Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Verify all steps were followed correctly
3. Check the server console for error messages
4. Test with the health check endpoint

## Next Steps

Once the basic setup is working, you might want to consider:

- Adding email templates for different types of submissions
- Implementing email validation
- Adding rate limiting to prevent spam
- Setting up automated responses to users
- Adding email analytics/tracking
