A wrapper for the [VACEfron API](https://vacefron.nl/api) in TypeScript.

## Installation
With pnpm (recommended):
```
pnpm add vacefron
```

With npm:
```
npm i vacefron
```

With yarn:
```
yarn add vacefron
```

## Example usages
### Basic
```js
const vacefron = require('vacefron');

(async () => {
    const buffer = await vacefron.water('text');
    console.log(buffer);
})();
```

### Discord
```js
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

const vacefron = require('vacefron');

client.on('message', async message => {
    if (message.content === '!iamspeed') {
        const buffer = await vacefron.iAmSpeed(message.author.displayAvatarURL());
        const attachment = new MessageAttachment(buffer, 'iamspeed.png');
    
        return message.channel.send(attachment);
    }   
});

client.login('token');
```

## Other wrappers
* [C#](https://github.com/VACEfron/VACEfron.NET)
* [Java](https://github.com/thunderstorm010/VACEfron4J)  
* [Python](https://github.com/Soheab/vacefron.py/)

## Support
[Discord server](https://discord.gg/xJ2HRxZ)

## Contributing
Anyone can contribute! Please just make them merge-worthy changes.