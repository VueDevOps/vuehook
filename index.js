const fetch = require("node-fetch");

const webhookUrl = "https://discord.com/api/webhooks/1339979289122050049/03HJC_0JXxPDHP-ZoMXvnU9LI2IhYqlMf_9nDv22Ux4RjrlQAd_go__mN7q5fJmwBzKz";

const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts. 💀",
  "I told my wife she should embrace her mistakes. She gave me a hug. 😭",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "I'm reading a book about anti-gravity. It's impossible to put down! 📖",
  "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
  "If a child refuses to nap, are they guilty of resisting a rest? 🛏️",
  "I used to play piano by ear, but now I use my hands. 🎹",
  "What’s orange and sounds like a parrot? A carrot! 🥕"
];

// Pick a random joke
const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

const payload = {
  content: randomJoke
};

fetch(webhookUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Joke sent successfully!");
  })
  .catch(error => console.error("Error sending joke:", error));
