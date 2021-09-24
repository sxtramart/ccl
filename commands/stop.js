module.exports = {
    name: "stop",
    aliases: ["disconnect", "leave", "st"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | Không có gì trong hàng đợi ngay bây giờ!`)
        client.distube.stop(message)
        message.channel.send(`${client.emotes.success} | em cút đây!`)
    }
}
