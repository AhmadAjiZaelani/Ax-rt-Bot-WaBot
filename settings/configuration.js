const fs = require("fs");

const config = {
  author: "BluzeAJ",
  botNumber: "085117057679",
  database: "AxèrtáBot-database",
  inviteCode: "CtnxNzmlxLOJqeSlxdQXTz",
  name: "- AxèrtáBot - BluzeAJ",
  owner: ["0", "0"],
  prefix: ["!", ".", "#", "/"],
  sessions: "sessions",
  tz: "Asia/Jakarta",

  id: {
    group: "120363359087059188@g.us",
    newsletter: "120363383421246482@newsletter",
  },

  style: {
    bold: (text) => `*${text}*`,
    boldItalic: (text) => `_*${text}*_`,
    boldUnderline: (text) => `**_${text}_**`,
    bullet: (text) => `• ${text}`,
    italic: (text) => `_${text}_`,
    monospace: (text) => `\`\`\`${text}\`\`\``,
    number: (num, text) => `${num}. ${text}`,
    quote: (text) => `> ${text}`,
    strikethrough: (text) => `~${text}~`,
  },

  settings: {
    alwaysOnline: true,
    antiCall: true,
    autoBio: true,
    autoFollowNewsletter: false,
    autoGoodbye: false,
    autoJoinGc: false,
    autoTyping: false,
    autoWelcome: false,
    demoteNotification: false,
    dmOnly: false,
    groupBotOnly: true,
    groupOnly: true,
    online: true,
    promoteNotification: false,
    readChat: false,
    readSw: false,
    reactSw: false,
    sendConnectionMessage: false,
    statusOnly: false,
  },

  messages: {
    admin:
      "> 👮 *Fitur ini hanya untuk Admin Grup*... Pastikan Anda adalah admin untuk menggunakannya.",
    badwords:
      "> ❎ *Mohon maaf*... Anda tidak diperbolehkan berkata kasar disini, saya akan menghapus pesan anda",
    botAdmin:
      "> ⚠️ *Bot harus menjadi admin grup*... Berikan hak admin kepada bot untuk menggunakan fitur ini.",
    call: "> 🚫 *Mohon maaf*... Kami tidak bisa menerima telepon dari Anda, anti call aktif!",
    done: "> 🎉 *Selesai!*... Terima kasih sudah menggunakan fitur ini!",
    error:
      "> ❌ *Terjadi kesalahan*... Silakan laporkan kepada pemilik bot untuk diperbaiki.",
    errorlink:
      "> 🔗 *Harap masukkan URL yang valid*... URL harus dimulai dengan 'https://'.",
    example: "> ❎ *Contoh Penggunaan Fitur*",
    group:
      "> 👥 *Fitur ini hanya tersedia di grup*... Pastikan Anda berada di grup WhatsApp untuk mengakses fitur ini.",
    maintenance:
      "> 🚧 *Fitur sedang dalam pemeliharaan*... Mohon tunggu hingga perbaikan selesai.",
    nsfw: "> ❎ *Media yang Anda kirimkan mengandung unsur pornografi,* kami akan menghapus-nya.",
    notFound: "> *❎ Tidak ada yang ditemukan!* Coba lagi nanti.",
    owner:
      "> 🧑‍💻 *Fitur ini hanya untuk pemilik bot*... Maaf, Anda tidak memiliki akses ke fitur ini.",
    premium:
      "> 🥇 *Upgrade ke Premium* untuk mendapatkan akses ke fitur eksklusif, murah dan cepat! Hubungi admin untuk info lebih lanjut.",
    private:
      "> 🔒 *Fitur ini hanya tersedia di chat pribadi*... Gunakan di chat pribadi dengan bot.",
    success:
      "> ✅ *Berhasil!*... Permintaan Anda telah diproses dengan sukses.",
    unregistered:
      "> ❎ *Mohon maaf*... Anda belum terdaftar dalam database kami, silahkan daftar agar Anda dapat menggunakan fitur ini.\n\n> Ketik .daftar [nama Anda] agar Anda terdaftar.",
    urlInvalid: "> *❎ URL tidak valid!*",
    wait: "> ⏳ *Mohon tunggu sebentar*... Kami sedang memproses permintaan Anda, harap bersabar ya!",
  },

  sticker: {
    androidApp:
      "https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro",
    author: "☘ AxèrtáBot ☘",
    email: "BluzeAJ@gmail.com",
    emojis: [],
    iOSApp:
      "https://apps.apple.com/id/app/muslim-pro-al-quran-adzan/id388389451?|=id",
    isAvatar: 0,
    packId: "https://github.com/BluzeAJ",
    packname: "☘ AxèrtáBot ☘",
    website: "https://github.com/BluzeAJ",
  },
};

module.exports = config;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  delete require.cache[file];
});
