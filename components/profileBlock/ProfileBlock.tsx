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
                Привет:
            </Text>
            <Text style={styles.userNameText} numberOfLines={1} ellipsizeMode="tail">{userName}!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 20,
        color: COLORS.gray,
        textAlign: 'center',
    },
    userNameText: {
        fontSize: 20,
        color: COLORS.gray,
        maxWidth: 85
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50
    }
})