import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';

type Props = {
    src: ImageSourcePropType;
    resizeMode: 'contain' | 'cover' | 'center' | 'repeat' | 'stretch'
}

export default function CardGame({src, resizeMode}: Props) {
    return (
        <View style={styles.imageWrap}>
            <Image
                style={styles.image}
                resizeMode={resizeMode}
                source={src}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageWrap: {
        width: '100%',
        height: '50%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
})