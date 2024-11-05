import {StyleSheet, TextInput, View, Text} from 'react-native';
import {COLORS} from "@/constants/colors";
import {useState} from 'react';
import {StatusBar} from "expo-status-bar";
import Button from "@/components/button/Button";
import SwiperImage from "@/components/swiper/SwiperImage";
import {avatarsData} from "@/app/db/avatarsData/avatars";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
    setNameLS: (name: string) => void;
}

export default function Modal({setNameLS}: Props) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSave = () => {
        if (!inputValue.trim()) {
            setError('Имя не может быть пустым!!!')
        }
        setNameLS(inputValue);
        setInputValue('');
    };

    const selectHandlerAva = async (id: number) => {
        const selectedAva = avatarsData.find((item) => item.id === id);
        if (selectedAva) {
            try {
                await AsyncStorage.setItem('avatarId', JSON.stringify({ id: selectedAva.id }));
                console.log(`Сохранён ID аватара: ${selectedAva.id}`);
            } catch (error: any) {
                console.error("Ошибка при сохранении ID аватара:", error.message);
            }
        } else {
            console.warn("Аватар не найден для ID:", id);
        }
    };

    return (
        <>
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>Введите свое имя, чтобы открылась
                            домашняя страница</Text>
                        <View style={styles.input}>
                            <TextInput
                                value={inputValue}
                                onChangeText={setInputValue}
                                style={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 16,
                                    color: 'white',
                                    fontSize: 20,
                                }}
                                placeholder='Введите Имя'
                            />
                            <Text style={styles.error}>{error}</Text>
                        </View>
                        <SwiperImage sources={avatarsData} onClick={selectHandlerAva}/>
                        <Button onClick={handleSave} title={'Сохранить'}/>
                    </View>
                </View>
            </View>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
    },
    modal: {
        width: '80%',
        height: '40%',
    },
    wrapper: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    text: {
        color: COLORS.gray,
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 32,
    },
    input: {
        width: '100%',
        backgroundColor: '#cdcbcb',
        borderRadius: 5,
        marginBottom: 30,
        position: 'relative'
    },
    error: {
        color: 'red',
        position: 'absolute',
        bottom: -20,
    }
});