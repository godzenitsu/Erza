const { command } = require("../lib/");
const axios = require("axios");
command(
    {
        pattern: "script",
        fromMe: false,
        desc: "ezra xd repo",
        type: "user",
    },
    async (message, match, m, client) => {
        let { data } = await axios.get('https://api.github.com/repos/Zeta-XD/REPO-TESTs')
        let cap = `\n𝐍𝐄𝐙𝐔𝐊𝐎 𝐌𝐃 𝐒𝐂𝐑𝐈𝐏𝐓\n\n
⛁ *REPO* : github.com/godzenitsu/NEZUKO-V2\n
⛁ *BIO* :  A Simple WhatsApp Bot\n
⛁ *LANGUAGE* : JavaScript\`
        
        return await message.client.relayMessage(message.jid,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 699999000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: cap,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
          });
