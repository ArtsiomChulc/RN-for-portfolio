import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from '@expo/vector-icons/AntDesign';
import {useAvatar} from "@/helpers/getAvaFromStorage";
import ProfileBlock from "@/components/profileBlock/ProfileBlock";
import {avatarsData} from "@/db/avatarsData/avatars";
import {COLORS} from "@/constants/colors";
import Modal from "@/components/modal/Modal";
import {homeListText, HomeTextType} from "@/db/homeListText/homeText";

export default function Home() {

    const [userName, setUserName] = useState<string | null>(null);
    const avatarUser = useAvatar(avatarsData, userName);

    useEffect(() => {
        const fetchUserName = async () => {
            const name = await AsyncStorage.getItem("name");
            if (!name) setUserName(null)
            setUserName(name);
        };
        fetchUserName();
    }, []);

    const setNameLS = async (newName: string) => {
        try {
            await AsyncStorage.setItem("name", newName);
            setUserName(newName);
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    const removeUser = async () => {
        await AsyncStorage.removeItem("name");
        await AsyncStorage.removeItem("avatarId");
        setUserName(null);
    };

    const renderItem = ({ item }: { item: HomeTextType }) => (
        <View>
            {item.title}
            {item.text}
        </View>
    );

    if (!userName) {
        return <Modal setNameLS={setNameLS}/>;
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.removeUser} onPress={removeUser}>
                    <AntDesign name="deleteuser" size={28} color={'#3c3c3a'} style={{textAlign: 'center'}}/>
                </TouchableOpacity>
                <ProfileBlock
                    src={avatarUser ? avatarUser : require('../db/avatarsData/avatars/no_ava.png')}
                    userName={userName}/>
                <View style={styles.wrapper}>
                    <ScrollView contentContainerStyle={styles.content}>
                        <Text style={styles.beginText}>
                            "Природа для детей" — это увлекательное и познавательное
                            мобильное приложение, которое предлагает детям уникальное
                            сочетание игры и обучения. В приложении представлены две
                            веселые детские игры, интересные факты о природе и простой в
                            использовании калькулятор.
                        </Text>
                        <FlatList data={homeListText} renderItem={renderItem} keyExtractor={item => item.id.toString()}/>
                    </ScrollView>
                </View>
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    )
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
        width: 100,
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: COLORS.gray,
        borderRadius: 40,
        marginTop: 20,
    },
    wrapper: {
        padding: 12,
        height: '75%',
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