import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { avatarsDataType } from "@/app/db/avatarsData/avatars";
import { COLORS } from "@/constants/colors";
import { useState } from 'react';

type Props = {
    sources: Array<avatarsDataType>,
    onClick?: (id: number) => void,
}

export default function SwiperImage({ sources, onClick }: Props) {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const dataImages = sources.map(({ src, id }) => {
        const selectAva = () => {
            setSelectedId(id);
            if (onClick) {
                onClick(id);
            }
        };

        const imgStyle = id === selectedId ? styles.selectedImg : styles.img;

        return (
            <TouchableOpacity key={id} style={styles.imgWrap} onPress={selectAva}>
                <Image style={imgStyle} source={src} />
            </TouchableOpacity>
        );
    });

    return (
        <ScrollView
            horizontal
            contentContainerStyle={styles.scrollContainer}
            showsHorizontalScrollIndicator={false}
        >
            {dataImages}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 20,
    },
    imgWrap: {
        width: 60,
        height: 60,
    },
    img: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.gray,
        borderRadius: 30,
    },
    selectedImg: {
        width: '105%',
        height: '105%',
        borderRadius: 30, // Пример радиуса для округления
        borderWidth: 4, // Добавьте границу для выделенного аватара
        borderColor: COLORS.buttonColor,
        opacity: 0.4,
    }
});