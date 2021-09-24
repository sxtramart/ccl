module.exports = {
    name: "pause",
    aliases: ["pause", "ps"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if (queue.pause) {
            client.distube.resume(message)
            return message.channel.send("Resumed the song for you :)")
        }
        client.distube.pause(message)
        message.channel.send("Đã tạm dừng bài hát")
    }
}
