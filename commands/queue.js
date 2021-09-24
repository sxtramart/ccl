module.exports = {
    name: "queue",
    aliases: ["q"],
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | Không có gì để phát!`)
        const q = queue.songs.map((song, i) => `${i === 0 ? "Đang phát:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        message.channel.send(`${client.emotes.queue} | **Hàng chờ**\n${q}`)
    }
}
