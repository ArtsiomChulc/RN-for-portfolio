import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {avatarsDataType} from "@/app/db/avatarsData/avatars";


type Props = {
    sources: Array<avatarsDataType>,
}

export default function SwiperImage({sources}: Props) {
    const dataImages = sources.map(({src, id}) => {
        return <TouchableOpacity style={styles.imgWrap}>
            <Image style={styles.img} source={src}/>
        </TouchableOpacity>
    })
    return (
        <ScrollView horizontal
                    contentContainerStyle={styles.scrollContainer}
                    showsHorizontalScrollIndicator={false}>
            {dataImages}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgWrap: {
        width: 60,
        height: 60
    },
    img: {
        width: '100%',
        height: '100%',
    }
})