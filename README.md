# Slack Messaging Api

This project demonstrates how to interact with the Slack API for messaging operations inside a developer sandbox environment. It includes authentication, sending, scheduling, retrieving, editing, and deleting messages using a Slack bot.

---

## ✅ Features

- 🔐 OAuth/Token-Based Authentication
- 💬 Send a Message to a Slack channel
- ⏰ Schedule a Message for future delivery
- 📥 Retrieve Messages using timestamp
- ✏️ Edit a Message
- ❌ Delete a Message
- 🧪 Tested in a Developer Sandbox workspace

---

## 🛠️ Tech Stack

- Node.js
- Slack API
- Axios
- dotenv

---

## 📁 Folder Structure

```
.
├── auth.js              # Check if bot is authenticated
├── sendMessage.js       # Sends a message instantly
├── scheduleMessage.js   # Schedules message for later
├── getMessages.js       # Fetches recent messages
├── editMessage.js       # Edits a message by timestamp
├── deleteMessage.js     # Deletes a message by timestamp
├── .env                 # Stores Slack bot token and channel ID
├── .gitignore
├── package.json
└── README.md
```

---

## 🔐 Environment Setup

Create a `.env` file in the root directory and add:

```
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
CHANNEL_ID=C1234567890
```

> ⚠️ Do not push `.env` to GitHub. It’s excluded via `.gitignore`.

---

## 🚀 How to Run

1. **Install dependencies**

```bash
npm install
```

2. **Run any script**

```bash
node auth.js             # Check authentication
node sendMessage.js      # Send a message instantly
node scheduleMessage.js  # Schedule a message 1 minute later
node getMessages.js      # Retrieve recent messages
node editMessage.js      # Edit a message (use correct timestamp)
node deleteMessage.js    # Delete a message (use correct timestamp)
```

📝 Note: To edit or delete a message, update the `ts` (timestamp) value inside the respective script using one retrieved from `getMessages.js`.

---

## 🧪 Developer Sandbox Use

All functionality was implemented and tested in a **Slack Developer Sandbox** workspace. This ensures that no real production data or users were affected. The bot was invited to the test channel and all API operations were performed there.

---

## 📎 Resources

- Slack API Docs: https://api.slack.com/apis  
- Messaging Guide: https://api.slack.com/messaging  
- Developer Sandbox: https://api.slack.com/docs/developer-sandbox


---

## 👤 Author

**Sahil Saraswat**
