import {View, Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import {COLORS} from "@/constants/colors";

type Props = {
    userName: string | null;
    src: ImageSourcePropType
}

export default function ProfileBlock({userName, src}: Props) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={src} resizeMode={'contain'}/>
            <Text style={styles.text}>
                Привет: {userName}!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
        marginBottom: 10
    },
    text: {
        fontSize: 20,
        color: COLORS.gray,
        textAlign: 'center',
        // marginBottom: 15
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50
    }
})