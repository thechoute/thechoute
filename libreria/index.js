const { WAConnection } = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require("fs")
const exec = require('child_process')

const leo = new WAConnection()
exports.leo = leo

exports.connect = async() => {
    leo.version = [2, 4444, 7]
    console.log(chalk.keyword("blue")('Conectando'))
    let auth = './tampa.json'
    leo.logger.level = 'warn'
    leo.on("qr", () => {
       console.log(chalk.keyword("red")('Bot Conectado Exitosamente'))
    })
    fs.existsSync(auth) && leo.loadAuthInfo(auth)
    leo.on('connecting', () => {
        console.log(chalk.whiteBright("🔥"), chalk.keyword("red")("🎓"), chalk.keyword("aqua")("Escanea el codigo a continuacion"))
    })

    await leo.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./tampa.json', JSON.stringify(leo.base64EncodedAuthInfo(), null, 2))  }
