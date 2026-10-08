import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🚀 𝑀𝑟.𝚃𝚘𝚖𝚖y blinders Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `𝑀𝑟.𝚃𝚘𝚖𝚖𝚢⃟ blinders 237`
        )
    }, { quoted: message })
}