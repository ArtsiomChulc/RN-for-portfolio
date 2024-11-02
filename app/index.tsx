import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {COLORS} from "@/constants/colors";


export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                home
            </Text>
        </SafeAreaView>
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
    text: {
        color: COLORS.gray
    }
})