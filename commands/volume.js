module.exports = {
    name: "volume",
    aliases: ["v", "set", "set-volume"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | Không có gì trong hàng đợi ngay bây giờ!`)
        const volume = parseInt(args[0])
        if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Nhập số vô đi má!`)
        client.distube.setVolume(message, volume)
        message.channel.send(`${client.emotes.success} | Âm lượng được đặt thành \`${volume}\``)
    }
}
