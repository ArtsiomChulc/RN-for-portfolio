import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import CardGame from "@/components/cardGame/CardGame";
import {useRouter} from "expo-router";

export default function Page() {
    const router = useRouter();

    const getAnimalsGame = () => router.push('/find-animals')

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.wrapper}>
                    <CardGame src={require('../assets/images/animalsScreen.webp')}
                              resizeMode={'cover'} buttonTitle={'Начать узнавать' +
                        ' зверей'} onClick={getAnimalsGame}/>
                    <CardGame src={require('../assets/images/words.webp')}
                              resizeMode={'cover'} buttonTitle={'Начать отгадывать' +
                        ' слова'}/>
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
        color: '#CDCDE0'
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 20,
    },
    text: {
        color: COLORS.gray
    }
})