async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "Join Our WhatsApp Channel",
                    body: "𝑀𝑟.𝚃𝚘𝚖𝚖𝚢⃟ blinders  ",
                    mediaType: 1,
                    thumbnailUrl: `https://whatsapp.com/channel/0029VbBT7FdLCoX1TDyQQb1B`,
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;