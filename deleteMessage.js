require('dotenv').config();

const axios = require("axios");

 

async function deleteMessageDynamically(messageTs) {
  try {
    const response = await axios.post(
      "https://slack.com/api/chat.delete",
      {
        channel: process.env.CHANNEL_ID,
        ts: messageTs,  // The timestamp of the message to be deleted
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.ok) {
      console.log("✅ Message deleted successfully!");
    } else {
      console.error("❌ Slack API error:", response.data.error);
    }
  } catch (error) {
    console.error("🚨 Request failed:", error.response?.data || error.message);
  }
}

// Example: Use the actual timestamp (ts) that you captured previously
const capturedTs = "1746781723.022319";  // Use the actual timestamp here
deleteMessageDynamically(capturedTs);
