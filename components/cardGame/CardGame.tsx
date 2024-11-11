import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import Button from "@/components/button/Button";

type Props = {
    src: ImageSourcePropType;
    resizeMode: 'contain' | 'cover' | 'center' | 'repeat' | 'stretch';
    buttonTitle: string;
    onClick?: () => void;
}

export default function CardGame({src, resizeMode, buttonTitle, onClick}: Props) {
    return (
        <View style={styles.imageWrap}>
            <Image
                style={styles.image}
                resizeMode={resizeMode}
                source={src}
            />
            <View style={styles.absolute}>
                <Button title={buttonTitle} onClick={onClick}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageWrap: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    absolute: {
        width: '80%',
        position: 'absolute',
        bottom: 10,
        left: 15,
    },
})