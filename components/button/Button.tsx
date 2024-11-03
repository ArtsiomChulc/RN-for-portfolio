import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from "@/constants/colors";

type Props = {
    onClick?: () => void;
    title: string;
}

export default function Button({ onClick, title }: Props) {
    return (
        <View style={styles.button}>
            <TouchableOpacity style={styles.button} onPress={onClick}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: COLORS.buttonColor,
        borderRadius: 5,
        padding: 10,
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.background,
        textAlign: 'center',
    },
});