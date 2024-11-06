import {DimensionValue, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/colors";

type Props = {
    onClick?: () => void;
    title: string;
    widthPercent?: DimensionValue;
    backgroundColor?: string;
}

export default function Button({onClick, title, widthPercent = '100%', backgroundColor = COLORS.buttonColor}: Props) {
    return (
        <TouchableOpacity style={[styles.button, { width: widthPercent, backgroundColor: backgroundColor }]} onPress={onClick} activeOpacity={0.7}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: COLORS.buttonColor,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.background,
        textAlign: 'center',
    },
});