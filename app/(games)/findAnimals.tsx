import {Image, StyleSheet, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import Button from "@/components/button/Button";

export default function Page() {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.imageWrap}>
                        <Image
                            style={styles.image}
                            resizeMode={'cover'}
                            source={require('../assets/images/animalsScreen.webp')}
                        />
                    </View>
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
        backgroundColor: COLORS.background,
        color: '#CDCDE0'
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    imageWrap: {
        width: '90%',
        height: '50%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    text: {
        color: COLORS.gray
    }
})