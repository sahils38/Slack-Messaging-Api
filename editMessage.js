require('dotenv').config();

const axios = require("axios");

 

async function editMessageDynamically(messageTs) {
  try {
    const response = await axios.post(
      "https://slack.com/api/chat.update",
      {
        channel: process.env.CHANNEL_ID,
        ts: messageTs,  
        text: " Edited message: Hello from my dynamic Slack bot in VS Code! 🎉",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.ok) {
      console.log("Message edited successfully!");
    } else {
      console.error("Slack API error:", response.data.error);
    }
  } catch (error) {
    console.error(" Request failed:", error.response?.data || error.message);
  }
}

// Example: Using the captured timestamp  from the previous sendMessage function
const capturedTs = "1746781723.022319";  
editMessageDynamically(capturedTs);
