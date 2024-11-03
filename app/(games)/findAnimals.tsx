import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";

export default function Page() {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>
                        find animals
                    </Text>
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
        justifyContent: "center"
    },
    text: {
        color: COLORS.gray
    }
})