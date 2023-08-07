import { Message } from 'whatsapp-web.js';

const websiteHandler = (message: Message) => {
  message.reply(
    `Website resmi desa dapat diakses melalui laman mendolokidul.kabpacitan.id`
  );
};

export default websiteHandler;
