require('dotenv').config();

const axios = require('axios');




async function authenticateSlack() {
  try {
    // Make the GET request to Slack's auth.test API
    const response = await axios.get('https://slack.com/api/auth.test', {
      headers: {
        Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      },
    });

    // Check if authentication was successful
    if (response.data.ok) {
      console.log('✅ Authentication successful!');
      console.log('User ID:', response.data.user_id);
      console.log('Team Name:', response.data.team);
    } else {
      console.error('❌ Authentication failed:', response.data.error);
    }
  } catch (error) {
    console.error('🚨 Error during authentication:', error.message);
  }
}

// Run authentication function
authenticateSlack();
