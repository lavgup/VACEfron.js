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

## Documentation
Check [docs.md](docs.md).

## Example usages
### Basic
```js
const vacefron = require('vacefron');

(async () => {
    const buffer = await vacefron.water('text');
})();
```

### Discord
```js
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

const vacefron = require('vacefron');

client.on(async message => {
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
* [Python](https://github.com/Soheab/vacefron.py/)

## Support
[Discord server](https://discord.gg/xJ2HRxZ)

## Contributing
Anyone can contribute! Please just make them merge-worthy changes.