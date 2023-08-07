import { Message } from 'whatsapp-web.js';

const informasiHandler = (message: Message) => {
  message.reply(
    `Kegiatan Desa Bulan Ini:
    19 Agustus 2023 -> Acara PHBN Desa dilaksanakan di depan Rumah Bu Etik`
  );
};

export default informasiHandler;
