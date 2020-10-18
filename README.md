A wrapper for the [VACEfron API](https://vacefron.nl/api) in JavaScript.

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
All functions return `Promise<Buffer>`.
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
})
```

## Other wrappers
* [C#](https://github.com/VACEfron/VACEfron.NET)
* [Python](https://github.com/Soheab/vacefron.py/)

## Contributing
Anyone can contribute! Please just make them merge-worthy changes.

I may do a TypeScript rewrite of this wrapper when I have more experience with it.