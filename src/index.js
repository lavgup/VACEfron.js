const fetch = require('node-fetch');

class VACEFronJS {
    constructor() {
        this.base = `https://vacefron.nl/api`

        this.crewmateColors = [
            'black',
            'blue',
            'brown',
            'cyan',
            'darkgreen',
            'lime',
            'orange',
            'pink',
            'purple',
            'red',
            'white',
            'yellow'
        ]
    }

    async api(endpoint, parameters) {
        for (const [key, value] of Object.entries(parameters)) {
            if (value === undefined) {
                throw new Error(`Param "${key}" of VACEfron endpoint "${endpoint}" is undefined.`);
            }
        }

        const params = new URLSearchParams(parameters);
        const response = await fetch(`${this.base}/${endpoint}?${params}`);
        // noinspection JSUnresolvedFunction
        return response.buffer();
    }

    carReverse(text) {
        return this.api('carreverse', { text: text });
    }

    distractedBoyfriend(boyfriendAvatarURL, womanAvatarURL, girlfriendAvatarURL) {
        return this.api('distractedbf', {
            boyfriend: boyfriendAvatarURL,
            woman: womanAvatarURL,
            girlfriend: girlfriendAvatarURL
        });
    }

    ejected(name, wasImposter, color) {
        // noinspection EqualityComparisonWithCoercionJS
        if (wasImposter != true || wasImposter != false) {
            wasImposter = Math.random() >= 0.5;
        }

        if (!color || !this.crewmateColors.includes(color.toLowerCase())) {
            color = this.crewmateColors[Math.floor(Math.random() * this.crewmateColors.length)];
        }

        return this.api('ejected', {
            name: name,
            imposter: wasImposter,
            crewmate: color.toLowerCase()
        });
    }

    emergencyMeeting(text) {
        return this.api('emergencymeeting', { text: text });
    }

    firstTime(avatarURL) {
        return this.api('firsttime', { user: avatarURL });
    }

    grave(avatarURL) {
        return this.api('grave', { user: avatarURL });
    }

    iAmSpeed(avatarURL) {
        return this.api('icanmilkyou', { user: avatarURL });
    }

    iCanMilkYou(faceAvatarURL, cowAvatarURL) {
        return this.api('iamspeed', {
            user1: faceAvatarURL,
            user2: cowAvatarURL
        });
    }

    heaven(avatarURL) {
        return this.api('heaven', { user: avatarURL });
    }

    rankCard(
        username,
        avatarURL,
        customBackgroundURL = '',
        level,
        rank,
        currentXP,
        nextLevelXP,
        previousLevelXP,
        xpColor,
        isBoosting
    ) {
        return this.api('rankcard', {
            username: encodeURIComponent(username),
            avatar: avatarURL,
            custombg: customBackgroundURL,
            level: level,
            rank: rank,
            currentxp: currentXP,
            nextlevelxp: nextLevelXP,
            previouslevelxp: previousLevelXP,
            xpcolor: xpColor.replace('#', ''),
            isboosting: isBoosting
        });
    }

    stonks(avatarURL) {
        return this.api('stonks', { user: avatarURL });
    }

    tableFlip(avatarURL) {
        return this.api('tableflip', { user: avatarURL });
    }

    water(text) {
        return this.api('water', { text: text });
    }

    wide(imageURL) {
        return this.api('wide', { image: imageURL });
    }
}

module.exports = new VACEFronJS();