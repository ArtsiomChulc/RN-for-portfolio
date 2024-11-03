import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import Button from "@/components/button/Button";
import CardGame from "@/components/cardGame/CardGame";

export default function Page() {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>
                    <CardGame src={require('../assets/images/animalsScreen.webp')}
                              resizeMode={'cover'}/>
                    <Button title={'Начать игру'}/>
                </View>
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: COLORS.background,
        color: '#CDCDE0'
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    text: {
        color: COLORS.gray
    }
})