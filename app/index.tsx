import {View, Text, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import {useState} from "react";
import {avatarsData} from "@/db/avatarsData/avatars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SwiperImage from "@/components/swiper/SwiperImage";
import Button from "@/components/button/Button";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import {Redirect} from "expo-router";
import {useUserName} from "@/helpers/getUserName";


export default function Welcome() {
    const {userName, setUserName, isLoading} = useUserName()
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSave = async () => {
        if (!inputValue.trim()) {
            setError('Имя не может быть пустым!!!')
        }
        await AsyncStorage.setItem("name", inputValue);
        setUserName(inputValue);
        setInputValue('');
    };

    const selectHandlerAva = async (id: number) => {
        const selectedAva = avatarsData.find((item) => item.id === id);
        if (selectedAva) {
            try {
                await AsyncStorage.setItem('avatarId', JSON.stringify({id: selectedAva.id}));
            } catch (error: any) {
                console.error("Ошибка при сохранении ID аватара:", error.message);
            }
        } else {
            console.warn("Аватар не найден для ID:", id);
        }
    };

    if (isLoading) {
        return <ActivityIndicator size={'large'} color={'#000'}/>;
    }

    if (userName) {
        return <Redirect href={'home'}/>
    }

    return (
        <>
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>Введите свое имя, чтобы
                            открылась
                            домашняя страница</Text>
                        <View style={styles.input}>
                            <TextInput
                                value={inputValue}
                                onChangeText={setInputValue}
                                onBlur={() => setError('')}
                                style={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 16,
                                    color: 'black',
                                    fontSize: 20,
                                }}
                                placeholder='Введите Имя'
                            />
                            <Text style={styles.error}>{error}</Text>
                        </View>
                        <SwiperImage sources={avatarsData}
                                     onClick={selectHandlerAva}/>
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
    },
    loading: {
        fontSize: 32,
        color: COLORS.gray,
        textAlign: 'center'
    }
});