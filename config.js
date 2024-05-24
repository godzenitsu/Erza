const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  SPARKY_API: "https://api-aswin-sparky.koyeb.app",
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "warn",
  SESSION_ID:process.env.SESSION_ID || "Ezra-XD--7L9USdG0bt8tjq1tF4DOm",
  LANG: process.env.LANG || "EN",
  HANDLERS: process.env.PREFIX || '^[.,!-]',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  STICKER_DATA: process.env.STICKER_DATA || "𝗭𝗲𝗻𝗶𝘁𝘀𝘂;𝗻𝗲𝘇𝘂𝗸𝗼",
  BOT_INFO: process.env.BOT_INFO || "𝐍𝐄𝐙𝐔𝐊𝐎 𝐌𝐃;𝐆𝐎𝐃 𝐙𝐄𝐍𝐈𝐓𝐒𝐔;https://i.imgur.com/imOAWEN.jpeg",
  AUDIO_DATA: process.env.AUDIO_DATA || "𝐍𝐄𝐙𝐔𝐊𝐎 𝐌𝐃;𝐆𝐎𝐃 𝐙𝐄𝐍𝐈𝐓𝐒𝐔;https://i.imgur.com/imOAWEN.jpeg",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  CAPTION: process.env.CAPTION || "𝐍𝐄𝐙𝐔𝐊𝐎 𝐌𝐃🧋",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  SUDO: process.env.SUDO || "0",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
  ALIVE_MSG: process.env.ALIVE_MSG || "Hey I'm Alive Now",
};
