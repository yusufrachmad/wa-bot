import { Message } from 'whatsapp-web.js';

const mendolokidulHandler = (message: Message) => {
  message.reply(
      `Halo, selamat datang di sumber informasi Desa Mendolo Kidul. Berikut command untuk informasi desa. 
*1* untuk menampilkan informasi mengenai kegiatan desa
*2* untuk menampilkan layanan masyarakat oleh Desa Mendolo Kidul
*3* untuk menampilkan realisasi dan anggaran pendapatan dan belanja desa
*4* untuk menampilkan website resmi desa
*5* untuk menampilkan daftar command`
  );
};

export default mendolokidulHandler;
