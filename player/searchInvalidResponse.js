module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    description: "The selection has been **cancelled** !",
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© Hyper"
    }
  }
})
    } else message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    description: `You must send a valid number between **1** and **${tracks.length}** !`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© ZerioDev(REMAKE)"
    }
  }
});
};
