# Google Sheets Contact Form Setup

## Step 1: Create Google Sheet

1. Create a new Google Sheet
2. Name it "Portfolio Contact Form"
3. Add these column headers in Row 1:
   - A1: **Timestamp**
   - B1: **Name**
   - C1: **Email**
   - D1: **Subject**
   - E1: **Message**

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete the default code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Sanitize and trim input data
    const sanitizedData = {
      name: data.name.trim().substring(0, 100),
      email: data.email.trim().substring(0, 100),
      subject: data.subject.trim().substring(0, 200),
      message: data.message.trim().substring(0, 2000)
    };
    
    // Add timestamp and form data
    sheet.appendRow([
      new Date(),
      sanitizedData.name,
      sanitizedData.email,
      sanitizedData.subject,
      sanitizedData.message
    ]);
    
    // Send email notification to you
    MailApp.sendEmail({
      to: "jabezsamson.dev@gmail.com", // Change to your email
      subject: "🚀 New Portfolio Contact Form Submission",
      htmlBody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `
    });
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the disk icon to **Save** (name it "ContactFormHandler")

## Step 3: Deploy Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: Portfolio Contact Form
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access** and grant permissions
7. **IMPORTANT**: Copy the **Web App URL** (looks like: https://script.google.com/macros/s/...)

## Step 4: Update Your Code

1. Open `src/components/sections/Contact.tsx`
2. Find this line (around line 39):
   ```typescript
   const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```
3. Replace with your actual Web App URL:
   ```typescript
   const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL_HERE/exec';
   ```

## Step 5: Test

1. Save your changes
2. Run your dev server: `npm run dev`
3. Submit a test form
4. Check your Google Sheet for the new entry
5. Check your email for the notification

## Troubleshooting

- **Not receiving submissions?** Make sure the Web App URL ends with `/exec`
- **Email not working?** Check Gmail permissions in Apps Script
- **CORS errors?** These are normal with `no-cors` mode - the form will still work
- **Need to update?** Deploy new version in Apps Script (Deploy → Manage deployments → Edit → New version)

## Optional: Add Auto-Reply to User

Add this after the `MailApp.sendEmail` block to send confirmation to the user:

```javascript
// Send confirmation email to user
MailApp.sendEmail({
  to: data.email,
  subject: "Thanks for reaching out!",
  htmlBody: `
    <h2>Hi ${data.name},</h2>
    <p>Thanks for contacting me! I've received your message and will get back to you soon.</p>
    <p>Best regards,<br>Jabez Samson</p>
  `
});
```

---

✅ All done! Your contact form now saves to Google Sheets and sends email notifications.
