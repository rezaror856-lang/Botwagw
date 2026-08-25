const chalk = require("chalk")
const fs = require("fs")

  global.ownerNumber = "6283142717431@s.whatsapp.net"
  global.kontakOwner = "6283142717431"
  global.namaStore = "Reza store"
  global.botName = "JANGAN CHAT BOT ANJING"
  global.ownerName = "Reza store"
  
  
  global.apikeyRama = "rg_a73add0c98a3fded3b98ed390bfaa5"
// Login di web ramashop.my.id dan ambil apikey nya

  global.linkyt = "link chanel yt lu"
  global.linkig = "link akun ig lu" 
  global.dana = "087773032012" 
  global.ovo = ""
  global.gopay = "087773032012" 
  global.sawer = "Link saweria mu" 
 global.linkgc1 = "https://chat.whatsapp.com/Ii2eUSposVPEFjl8oPWVdy?s=cl&p=a&ilr=1"
 global.linkgc2 = "Link grup WhatsApp mu (2)"
//Jikalau dari salah satu di atas kalian tidak memiliki 
//silahkan kosongkan atau isi --


const textSewa = `*SEWA BOT GROUP WHATSAPP*

Harga Sewa:
Per Hari: Rp1.000
Per Minggu: Rp10.000
Per Bulan: Rp20.000


Keunggulan Bot WhatsApp Kami:

- Otomatis balas pesan pelanggan
- Bisa menampilkan list anda didalam group 
- Support berbagai format & perintah 
- Fitur keamanan grup
- Auto hapus link group WhatsApp 
- Sambut member baru
- Rekap penjualan setiap group 
- menampilkan payment didalam group
- Group menjadi terjaga
- Online 24 jam non-stop

Minat sewa? Hubungi Nomor:
wa.me//6285272818188`






//==================TIDAK PERLU DI EDIT=========================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
module.exports = { textSewa }