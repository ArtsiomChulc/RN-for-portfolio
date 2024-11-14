import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import {SafeAreaView} from "react-native-safe-area-context";


const CalculatorMini: React.FC = () => {


    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}
                            style={styles.scrollView}
                >
                    <Text style={styles.contentText}>Calculator</Text>
                </ScrollView>
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: COLORS.background,
        color: COLORS.gray
    },
    scrollView: {
        width: '100%',
        height: '100%',
    },
    contentText: {
        textAlign: 'left',
        lineHeight: 24,
        padding: 10,
        fontSize: 18,
        color: COLORS.gray
    },
});

export default CalculatorMini;