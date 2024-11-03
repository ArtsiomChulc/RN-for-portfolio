import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from "@/constants/colors";
import { useState } from 'react';
import {StatusBar} from "expo-status-bar";

type Props = {
    setNameLS: (name: string) => void;
}

export default function Modal({ setNameLS }: Props) {
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
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.button} onPress={handleSave}>
                                <Text style={styles.buttonText}>
                                    Сохранить
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar backgroundColor="#161622" style="light" />
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
    input: {
        width: '100%',
        backgroundColor: '#cdcbcb',
        borderRadius: 5,
        marginBottom: 30,
    },
    button: {
        width: '100%',
        backgroundColor: COLORS.buttonColor,
        borderRadius: 5,
        padding: 10,
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.background,
        textAlign: 'center',
    },
});