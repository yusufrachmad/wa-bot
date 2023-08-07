import { Message } from 'whatsapp-web.js';

import helpHandler from '../handlers/help';
import stickerHandler from '../handlers/sticker';
import mendolokidulHandler from '../handlers/mendolokidul';
import informasiHandler from '../handlers/informasi';
import layananHandler from '../handlers/layanan';
import apbdesHandler from '../handlers/apbdes';
import websiteHandler from '../handlers/website';
import goErrorHandler from '../utils/goErrHandler';
import parseOptions from '../utils/parseOptions';

const messageListener = async (message: Message) => {
  // get contact info
  const { data: contact, error } = await goErrorHandler(() =>
    message.getContact()
  );
  if (!contact) {
    message.reply('Terjadi kesalahan pada saat mendapatkan info kontak');
    return console.error('Error when getting contact.', error);
  }

  // stop the listener if message is from a status or from a group
  if (message.isStatus || contact.isGroup) return;

  // parse command and options
  const [command, ...rest] = message.body.split(' ').map((cmd) => cmd.trim());
  const options = rest
    .join(' ')
    .replaceAll(' name', '|name')
    .replaceAll(' author', '|author')
    .split('|');
  const { stickerName, stickerAuthor } = parseOptions(options);

  // handle help
  if (command.toLowerCase().includes('!tes')) {
    return helpHandler(message);
  }

  // handle mendolokidul
  if (['!mendolokidul', '!help'].includes(command)) {
    return mendolokidulHandler(message);
  }

  if (command.toLowerCase().includes('1')) {
    return informasiHandler(message);
  }

  if (command.toLowerCase().includes('2')) {
    return layananHandler(message);
  }

  if (command.toLowerCase().includes('3')) {
    return apbdesHandler(message);
  } 

  if (command.toLowerCase().includes('4')) {
    return websiteHandler(message);
  }

  if (command.toLowerCase().includes('5')) {
    return mendolokidulHandler(message);
  }    

  // handle sticker
  if (['!sticker', '!stiker'].includes(command) && message.type === 'image') {
    await stickerHandler({
      message,
      phoneNumber: contact.id.user,
      stickerName,
      stickerAuthor,
    });

    // if (!contact.name || !contact.name.endsWith('(DONATUR)'))
    //   await message.reply(
    //     'Merasa terbantu oleh bot ini? Anda bisa bantu saya dengan donasi melalui link berikut ini\n\nhttps://saweria.co/tfkhdyt\n\nSetelah Anda melakukan donasi, pesan ini akan hilang di request selanjutnya.'
    //   );

    return;
  } else if (command.toLowerCase().includes('sticker')) {
    return message.reply('Gambarnya mana?');
  }

  // message.reply('*Command salah*, coba cek kembali command yang Anda kirim');
};

export default messageListener;
