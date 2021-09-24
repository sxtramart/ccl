module.exports = {
    name: "repeat",
    aliases: ["loop", "rp", "l"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | Không có gì để phát!`)
        let mode = null
        switch (args[0]) {
            case "off":
                mode = 0
                break
            case "song":
                mode = 1
                break
            case "queue":
                mode = 2
                break
        }
        mode = client.distube.setRepeatMode(message, mode)
        mode = mode ? mode === 2 ? "Lặp lại hàng đợi" : "Lặp lại bài hát hiện tại" : "không lặp"
        message.channel.send(`${client.emotes.repeat} | Set repeat mode to \`${mode}\``)
    }
}
