export default () => {
    return {
        expo: {
            name: 'game',
            slug: 'game',
            owner: "artsiomchults",
            scheme: 'your-scheme',
            newArchEnabled: true,
            android: {
                package: 'com.artsiomchults.game',
            },
            extra: {
                eas: {
                    projectId: "7a0da2c4-d1da-4819-ba04-daf5eedcd850",
                },
            },
        },
    };
};