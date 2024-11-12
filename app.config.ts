import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
    name: 'game',
    slug: 'game',
    scheme: 'your-scheme',
    android: {
        package: 'com.artsiomchults.game',
    },
    extra: {
        eas: {
            projectId: '7a0da2c4-d1da-4819-ba04-daf5eedcd850',
        },
    },
};

export default config;
