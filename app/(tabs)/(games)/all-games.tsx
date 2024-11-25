import {
    ScrollView,
    StyleProp,
    StyleSheet,
    useWindowDimensions,
    ViewStyle
} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import CardGame from "@/components/cardGame/CardGame";
import {useRouter} from "expo-router";

export default function Page() {
    const router = useRouter();

    const {height, width} = useWindowDimensions();
    const isPortrait = height > width;

    const getAnimalsGame = () => router.push('/find-animals');
    const getCoupleGame = () => router.push('/find-couple');

    const wrapperStyle: StyleProp<ViewStyle> = {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 20,
        flexDirection: isPortrait ? 'column' : 'row'
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={wrapperStyle}>
                    <CardGame src={require('../../../assets/images/animalsScreen.webp')}
                              resizeMode={'cover'} buttonTitle={'Отгадай животное'} onClick={getAnimalsGame}/>
                    <CardGame src={require('../../../assets/images/findCouple.webp')}
                              resizeMode={'cover'} buttonTitle={'Тренируй память'} onClick={getCoupleGame}/>
                </ScrollView>
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 10,
        backgroundColor: COLORS.background,
        color: '#CDCDE0',
    },
    text: {
        color: COLORS.gray
    }
})