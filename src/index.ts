import fetch from 'node-fetch';

class VACEFronJS {
    baseURL: string;
    crewmateColors: string[];

    public constructor() {
        this.baseURL = `https://vacefron.nl/api`;

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
        ];
    }

    protected async api(endpoint: string, parameters: object): Promise<Buffer> {
        for (const [key, value] of Object.entries(parameters)) {
            if (value === undefined) {
                throw new Error(`Param "${key}" of VACEfron endpoint "${endpoint}" is undefined.`);
            }
        }

        // @ts-ignore
        const params = new URLSearchParams(parameters);
        const response = await fetch(`${this.baseURL}/${endpoint}?${params}`);

        if (response.status !== 200) {
            const body = await response.json();
            throw new Error(`"${endpoint}" endpoint: ${body.message} (status ${body.code})`);
        }

        return response.buffer();
    }

    public carReverse(text: string): Promise<Buffer> {
        return this.api('carreverse', { text: text });
    }

    public distractedBoyfriend(boyfriendAvatarURL: string, womanAvatarURL: string, girlfriendAvatarURL: string): Promise<Buffer> {
        return this.api('distractedbf', {
            boyfriend: boyfriendAvatarURL,
            woman: womanAvatarURL,
            girlfriend: girlfriendAvatarURL
        });
    }

    public ejected(name: string, wasImposter?: boolean, color?: string): Promise<Buffer> {
        if (!wasImposter) {
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

    public emergencyMeeting(text: string): Promise<Buffer> {
        return this.api('emergencymeeting', { text: text });
    }

    public firstTime(avatarURL: string): Promise<Buffer> {
        return this.api('firsttime', { user: avatarURL });
    }

    public grave(avatarURL: string): Promise<Buffer> {
        return this.api('grave', { user: avatarURL });
    }

    public iAmSpeed(avatarURL: string): Promise<Buffer> {
        return this.api('iamspeed', { user: avatarURL });
    }

    public iCanMilkYou(faceAvatarURL: string, cowAvatarURL: string): Promise<Buffer> {
        return this.api('icanmilkyou', {
            user1: faceAvatarURL,
            user2: cowAvatarURL
        });
    }

    public heaven(avatarURL: string): Promise<Buffer> {
        return this.api('heaven', { user: avatarURL });
    }

    public rankCard(
        username: string,
        avatarURL: string,
        customBackgroundURL: string,
        level: number,
        rank: number,
        currentXP: number,
        nextLevelXP: number,
        previousLevelXP: number,
        xpColor: string,
        isBoosting: boolean
    ): Promise<Buffer> {
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

    public stonks(avatarURL: string): Promise<Buffer> {
        return this.api('stonks', { user: avatarURL });
    }

    public tableFlip(avatarURL: string): Promise<Buffer> {
        return this.api('tableflip', { user: avatarURL });
    }

    public water(text: string): Promise<Buffer> {
        return this.api('water', { text: text });
    }

    public wide(imageURL: string): Promise<Buffer> {
        return this.api('wide', { image: imageURL });
    }
}

export = new VACEFronJS();
