import {StyleSheet, Text, View} from 'react-native';
import {ReactNode} from "react";

type Props = {
    title: string,
    colorText: string,
    children: ReactNode,
}

export default function IconTab({title, colorText, children}: Props) {
    return (
        <View style={styles.container}>
            <View>
                {children}
            </View>
            <Text style={{color: `${colorText}`, textAlign: 'center'}}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    }
})