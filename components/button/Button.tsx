import {
    DimensionValue,
    PressableProps,
    StyleSheet,
    Text,
    TouchableOpacity,
    Vibration,
    ViewStyle
} from 'react-native';
import {COLORS} from "@/constants/colors";

type Props = {
    onClick?: () => void;
    title: string;
    widthPercent?: DimensionValue;
    backgroundColor?: string;
    style?: PressableProps & ViewStyle
    colorText?: string
}

export default function Button({onClick, title, widthPercent = '100%', backgroundColor = COLORS.buttonColor, style, colorText = COLORS.background}: Props) {
    const onClickHandler = () => {
        if (onClick) {
            onClick()
        }
        Vibration.vibrate(100)
    }
    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.button, style, { width: widthPercent, backgroundColor: backgroundColor }]} onPress={onClickHandler}>
            <Text style={[styles.buttonText, {color: colorText}]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
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