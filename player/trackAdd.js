module.exports = (client, message, queue, track) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    fields: [
    {
      "name": "Add Track",
      "value": `${track.title}`,
    }
  ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© Hyper"
    }
  }
});
};
