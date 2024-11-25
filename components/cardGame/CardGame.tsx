import {
    Image,
    ImageSourcePropType, StyleProp,
    StyleSheet,
    useWindowDimensions,
    View, ViewStyle
} from 'react-native';
import Button from "@/components/button/Button";
import {COLORS} from "@/constants/colors";

type Props = {
    src: ImageSourcePropType;
    resizeMode: 'contain' | 'cover' | 'center' | 'repeat' | 'stretch';
    buttonTitle: string;
    onClick?: () => void;
}

export default function CardGame({src, resizeMode, buttonTitle, onClick}: Props) {
    const {height, width} = useWindowDimensions();
    const isPortrait = height > width;

    const containerStyle: StyleProp<ViewStyle> = {
        width: isPortrait ? '100%' : '45%',
        height: isPortrait ? height/3.6 : height/2,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative'
    }

    return (
        <View style={containerStyle}>
            <Image
                style={styles.image}
                resizeMode={resizeMode}
                source={src}
            />
            <View style={styles.absolute}>
                <Button colorText={COLORS.white} title={buttonTitle} onClick={onClick} widthPercent={'80%'} backgroundColor={COLORS.blackOpacity} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    absolute: {
        position: 'absolute',
        bottom: 10,
        left: 15,
    },
})