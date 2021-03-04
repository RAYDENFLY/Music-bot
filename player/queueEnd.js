module.exports = (client, message, queue) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    description: `Attention! this bot can't run on voice channel 24 hours so please add songs to continue playback`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© Hyper"
    }
  }
});
};
