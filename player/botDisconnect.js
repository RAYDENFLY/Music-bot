module.exports = (client, message, queue) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    description: `Music stopped as i have been disconnected from the channel !`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© ZerioDev(REMAKE)"
    }
  }
});
};
