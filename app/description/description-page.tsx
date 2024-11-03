import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";


export default function Page() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.wrapper}>
                    <Text style={styles.text}>
                        description
                    </Text>
                </ScrollView>
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.background,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: COLORS.gray,
    }
})