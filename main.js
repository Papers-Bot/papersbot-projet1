const { Client } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong !");
  }
});

client.login(process.env.CLIENT_TOKEN);
