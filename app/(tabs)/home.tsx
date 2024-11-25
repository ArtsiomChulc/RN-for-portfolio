import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View,
    useWindowDimensions,
    ViewStyle, StyleProp
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
import {homeListText, HomeTextType} from "@/db/homeListText/homeText";
import {router} from "expo-router";

export default function Home() {
    const {width, height} = useWindowDimensions();
    const isPortrait = height > width;

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


    const removeUser = async () => {
        await AsyncStorage.removeItem("name");
        await AsyncStorage.removeItem("avatarId");
        setUserName(null);
        router.replace('/');
    };

    const renderItem = ({item}: { item: HomeTextType }) => (
        <View>
            {item.title}
            {item.text}
        </View>
    );

    const containerStyle: StyleProp<ViewStyle> = {
        flexDirection: width > 500 ? 'row' : 'column',
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: COLORS.background,
    }

    const wrapperStyle: StyleProp<ViewStyle> = {
        padding: 12,
        height: isPortrait ? '85%' : '100%',
        width: isPortrait ? '100%' : '80%',
        borderWidth: 1,
        borderColor: COLORS.grayOpacity,
        borderRadius: 10,
    }

    return (
        <>
            <SafeAreaView style={containerStyle}>
                <TouchableOpacity style={styles.removeUser}
                                  onPress={removeUser}>
                    <AntDesign name="deleteuser" size={28} color={'#3c3c3a'}
                               style={styles.deleteUserIcon}/>
                </TouchableOpacity>
                <ProfileBlock
                    src={avatarUser ? avatarUser : require('../../db/avatarsData/avatars/no_ava.png')}
                    userName={userName}/>
                <View style={styles.content}>
                    <View style={wrapperStyle}>
                        <FlatList data={homeListText} renderItem={renderItem}
                                  keyExtractor={item => item.id.toString()}/>
                    </View>
                </View>
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: COLORS.gray,
        textAlign: 'center',
        marginBottom: 15
    },
    removeUser: {
        width: 80,
        position: 'absolute',
        top: 50,
        left: 20,
        paddingVertical: 10,
        backgroundColor: COLORS.gray,
        borderRadius: 40,
        marginTop: 10,
    },
    content: {
        padding: 10,
        flexGrow: 1,
    },
    beginText: {
        fontSize: 20,
        textAlign: 'left',
        color: COLORS.gray,
        marginBottom: 20
    },
    loading: {
        fontSize: 32,
        color: COLORS.gray,
        textAlign: 'center'
    },
    deleteUserIcon: {
        textAlign: 'center'
    }
});