import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {COLORS} from "@/constants/colors";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from '@expo/vector-icons/AntDesign';
import Modal from "@/components/modal/Modal";

export default function Home() {
    const [name, setName] = useState<string>('');

    const getUserName = async () => {
        try {
            const storedName = await AsyncStorage.getItem("name");
            if (storedName !== null) {
                setName(storedName);
            }
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    useEffect(() => {
        getUserName();
    }, []);

    const setNameLS = async (newName: string) => {
        try {
            await AsyncStorage.setItem("name", newName);
            setName(newName);
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    const removeUser = async () => {
        await AsyncStorage.removeItem("name");
        setName('');
    };

    if (!name) {
        return <Modal setNameLS={setNameLS}/>;
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Привет: {name}!</Text>
                <View style={styles.wrapper}>
                    <ScrollView contentContainerStyle={styles.content}>
                        <Text style={styles.beginText}>
                            В современном мире технологии играют ключевую роль в нашей
                            жизни. Каждый день мы сталкиваемся с новыми инновациями,
                            которые упрощают наши задачи и делают жизнь более удобной.
                            Например, смартфоны стали незаменимыми помощниками, позволяя
                            нам оставаться на связи и получать информацию в любое время.
                            Социальные сети изменили способ общения, предоставляя
                            платформы для обмена мнениями и идеями. Однако с ростом
                            технологий возникают и новые вызовы, такие как защита личных
                            данных и влияние на психическое здоровье. Важно находить
                            баланс между использованием технологий и сохранением личного
                            пространства. Мы должны помнить о том, что технологии — это
                            инструмент, который должен служить нам, а не подчинять себе.
                            Каждый из нас может внести свой вклад в создание более
                            ответственного цифрового мира.
                        </Text>
                        <TouchableOpacity style={styles.removeUser} onPress={removeUser}>
                            <AntDesign name="deleteuser" size={24} color={'#fff'}/>
                            <Text style={styles.removeText}>удалить пользователя</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: COLORS.background,
        color: '#CDCDE0',
    },
    text: {
        fontSize: 20,
        color: COLORS.gray,
        textAlign: 'center',
        marginBottom: 15
    },
    removeUser: {
        paddingVertical: 10,
        backgroundColor: COLORS.gray,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    removeText: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'capitalize',
    },
    wrapper: {
        padding: 12,
        height: '93%',
        borderWidth: 1,
        borderColor: COLORS.buttonColor,
        borderRadius: 10,
    },
    content: {
        padding: 20,
        flexGrow: 1,
    },
    beginText: {
        fontSize: 20,
        textAlign: 'left',
        color: COLORS.gray,
        marginBottom: 20
    }
});