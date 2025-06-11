import {SocialProvider} from "better-auth/social-providers";

export const enabledOAuthProviders : SocialProvider[] = ["github", "google", "discord"];

const allProviderKeys = {
    apple: {
        clientId: process.env.APPLE_CLIENT_ID as string,
        clientSecret: process.env.APPLE_CLIENT_SECRET as string,
        // Optional
        appBundleIdentifier: process.env.APPLE_APP_BUNDLE_IDENTIFIER as string,
    },
    discord: {
        clientId: process.env.DISCORD_CLIENT_ID as string,
        clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    },
    facebook: {
        clientId: process.env.FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    },
    github: {
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    kick: {
        clientId: process.env.KICK_CLIENT_ID as string,
        clientSecret: process.env.KICK_CLIENT_SECRET as string,
    },
    microsoft: {
        clientId: process.env.MICROSOFT_CLIENT_ID as string,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
        // Optional
        tenantId: 'common',
        requireSelectAccount: true
    },
    tiktok: {
        clientId: process.env.TIKTOK_CLIENT_ID as string,
        clientSecret: process.env.TIKTOK_CLIENT_SECRET as string,
        clientKey: process.env.TIKTOK_CLIENT_KEY as string,
    },
    twitch: {
        clientId: process.env.TWITCH_CLIENT_ID as string,
        clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
    },
    twitter: {
        clientId: process.env.TWITTER_CLIENT_ID as string,
        clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    },
    socialProviders: {
        dropbox: {
            clientId: process.env.DROPBOX_CLIENT_ID as string,
            clientSecret: process.env.DROPBOX_CLIENT_SECRET as string,
        },
    },
    linkedin: {
        clientId: process.env.LINKEDIN_CLIENT_ID as string,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    },
    gitlab: {
        clientId: process.env.GITLAB_CLIENT_ID as string,
        clientSecret: process.env.GITLAB_CLIENT_SECRET as string,
        issuer: process.env.GITLAB_ISSUER as string,
    },
    reddit: {
        clientId: process.env.REDDIT_CLIENT_ID as string,
        clientSecret: process.env.REDDIT_CLIENT_SECRET as string,
    },
    roblox: {
        clientId: process.env.ROBLOX_CLIENT_ID as string,
        clientSecret: process.env.ROBLOX_CLIENT_SECRET as string,
    },
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID as string,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    },
    vk: {
        clientId: process.env.VK_CLIENT_ID as string,
        clientSecret: process.env.VK_CLIENT_SECRET as string,
    },
    zoom: {
        clientId: process.env.ZOOM_CLIENT_ID as string,
        clientSecret: process.env.ZOOM_CLIENT_SECRET as string,
    },
}

export const getProviderKeys = (providers: Array<string>) => {
    const selectedProviders: {
        [key: string]: {
            clientId: string,
            clientSecret: string,
        }
    } = {};
    for (const provider of providers) {
        selectedProviders[provider] = allProviderKeys[provider];
    }
    return selectedProviders;
}