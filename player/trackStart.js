  
const Discord = require ('discord.js')
module.exports = (client, message, track) => {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    fields: [
    {
      "name": "Playing Music",
      "value": `${track.title}`,
    }
  ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© ZerioDev (REMAKE)"
    }
  }
})
};
