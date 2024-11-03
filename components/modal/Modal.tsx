import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from "@/constants/colors";
import {useState} from 'react';
import {StatusBar} from "expo-status-bar";
import Button from "@/components/button/Button";

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
    input: {
        width: '100%',
        backgroundColor: '#cdcbcb',
        borderRadius: 5,
        marginBottom: 30,
    },
});