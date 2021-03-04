module.exports = (client, message, queue, playlist) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: "Playlist Add",
    fields: [
      {
      "name": "Playlist Title",
      "value": `${playlist.title}`,
      },
      {
      "name": "Duration",
      "value": `${playlist.tracks.length}`,
      "inline": true
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© Hyper"
    }
  }
})
};
