const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94722807735"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'dabulla/Srilanka'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94722807735' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lMeitXcFFIMCs1WkVpeWpzSzc0WmcvL3B5UXJlajVLNjFNVEJQdWZGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFlaNDZvMDY4QldaZlNHT1IvWGRlMzJtNU9OOUFVRUV0RWh6K2RqbHEwWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTXhCMEdpV3hrRjhXV29jSU1FZmVqckxWVjNabUN2eWhHT3RNbEZ3SzI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrdzdERDRpWlk1RG5HdEVRZDUyK1haeHlRTXNGYXVndGg3OGg4K2VGMHp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9NV1dRbW4xRFphRFREUTB0MU5neGN0Tmk4MTdFZDI2eGZ3NUhYZ3ZyM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5DekFjdHhCcFdrRmQrVTJIeFh3TkU0ZGExaTcwYlNncEptT1ZZRC8vVmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0I4RU1sMGxZaVhSaTM3MzRhYm5lOE9pMGVaTnhqZ2lEM1dVVmk2NXJXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWExBZHN0UDNqdDVpK2puQlhTcjFNankwRC9JN0R6eTYvT2dPMWEvankzST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNNR3VzTEVhM3RwR1NxeDFRbmhHcm9PTjBPU0ZrRDcvRXBsU1hxblp5cUNmQjdDY0REYkYxNzNPK2tmTWdZZzF3SUtMZ043WE1UUTEydENxTk1vdWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiJxYmVsK0N2NVQ1algzcGROYnZheTVXNGR5OU9Sc0dOMmtqUmsxWWdXVmg4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiZ1MyOXlTcVFyQ3pCbElYcmlrZUpRIiwicGhvbmVJZCI6ImJkYTg4MTZkLWNlZmEtNDExZC04YWIyLWY1MTUwNWIzZTBiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCTUY1ZGRDMnpmcStsNHhpd1dUNW9MV3gyOFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmxVc2xZWGtDNE40bmdEMThHZjNybzB0ZjBBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikc0TTk0WTlHIiwibWUiOnsiaWQiOiI5NDcyMjgwNzczNToxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5KeIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTEF5L01HRU5YV3JhNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUczB2cVFDZkQ0MmIvc2I4bi9YS0k4QjRkOWtnejcwdm5wdC8wQ3lXcmtrPSIsImFjY291bnRTaWduYXR1cmUiOiJlREdHRE5oQk9wTU50ckVlVDBwb2FHZGl2Zlp6QkZla0NhcXhlbWRmaENSZHM2eFJkMitYU1ZlZTczeHAzcWkyUklwYVN6c3VVM2lWRG10WXhSOWtBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoianpDeXozMzBucDZaODc2UFZ4dEtvNVdDa3N6bEZSbWxCNHQ3alB4NnptdDRORVlMQmFyZUVXS05hN2ZXR3ZiaEhEVXcwbXhieVMyMS9uRGdvWjQwaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyMjgwNzczNToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVN05MNmtBbncrTm0vN0cvSi8xeWlQQWVIZlpJTSs5TDU2YmY5QXNscTVKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA3ODMwMTA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJsVCJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Dark-Sasiya" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Dark Sasiya' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
