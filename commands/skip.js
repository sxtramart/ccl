module.exports = {
    name: "skip",
    aliases: ["s", "sk"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | Không có gì trong hàng đợi ngay bây giờ!`)
        try {
            client.distube.skip(message)
            message.channel.send(`${client.emotes.success} | Bỏ qua! Đang phát:\n${queue.songs[0].name}`)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | ${e}`)
        }
    }
}
