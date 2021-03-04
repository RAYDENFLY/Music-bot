module.exports = (client, message, query, tracks) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    description: `${client.emotes.error} - You did not provide a valid response ... Please send the command again !`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© ZerioDev(REMAKE)"
    }
  }
});
};
