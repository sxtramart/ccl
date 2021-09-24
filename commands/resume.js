module.exports = {
    name: "resume",
    aliases: ["rs", "unpause"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | Không có gì trong hàng đợi ngay bây giờ!`)
        client.distube.resume(message)
        message.channel.send("Tiếp tục bài hát")
    }
}
