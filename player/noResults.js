module.exports = (client, message, query) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    description: `${query}`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© Hyper"
    }
  }
});
};
