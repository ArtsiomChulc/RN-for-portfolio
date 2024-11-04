import {StyleSheet, TextInput, View, Text} from 'react-native';
import {COLORS} from "@/constants/colors";
import {useState} from 'react';
import {StatusBar} from "expo-status-bar";
import Button from "@/components/button/Button";
import SwiperImage from "@/components/swiper/SwiperImage";
import {avatarsData} from "@/app/db/avatarsData/avatars";

type Props = {
    setNameLS: (name: string) => void;
}

export default function Modal({setNameLS}: Props) {
    const [inputValue, setInputValue] = useState('');

    const handleSave = () => {
        setNameLS(inputValue);
        setInputValue('');
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
                        </View>
                        <SwiperImage sources={avatarsData}/>
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
        flex: 1,
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
    },
});