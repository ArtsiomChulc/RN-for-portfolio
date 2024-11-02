import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import RightButton from "@/components/rightHeaderButton/RightButton";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({});

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: '',
                headerStyle: {backgroundColor: '#161622'},
                headerLeft: () => (<RightButton/>),
                headerShadowVisible: false
            }}/>
            <Stack.Screen name="description" options={{
                title: ''
            }}/>
        </Stack>
    );
}
