import { Message } from 'whatsapp-web.js';

const apbdesHandler = (message: Message) => {
  message.reply(
    `Papan Kegiatan Desa:
    19 Agustus 2023 -> Acara PHBN Desa dilaksanakan di depan Rumah Bu Etik`
  );
};

export default apbdesHandler; 
