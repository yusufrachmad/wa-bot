import { Message } from 'whatsapp-web.js';

const mendolokidulHandler = (message: Message) => {
  message.reply(
    "Halo, selamat datang di sumber informasi Desa Mendolo Kidul. Berikut command untuk informasi desa.\n1. *!informasi*: untuk menampilkan informasi mengenai kegiatan desa.\n2. *!nomor*: untuk menampilkan nomor WhatsApp perangkat Desa Mendolo Kidul\n3. *!persuratan*: untuk menampilkan tata cara mengajukan surat ke pemerintah desa"
  );
};

export default mendolokidulHandler;
