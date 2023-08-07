import { Message } from 'whatsapp-web.js';

const layananHandler = (message: Message) => {
  message.reply(
    `Desa melayani kebutuhan masyarakat berupa:
1. Pengaduan
2. Laporan dokumentasi
3. Pengajuan surat
4. Administrasi`
  );
};

export default layananHandler;
