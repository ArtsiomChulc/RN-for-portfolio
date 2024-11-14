import { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { avatarsDataType } from "@/db/avatarsData/avatars";

export const useAvatar = (array: avatarsDataType[], userName: string | null) => {
    const [avatarSrc, setAvatarSrc] = useState<ImageSourcePropType>(require('../db/avatarsData/avatars/no_ava.png'));

    const fetchAvatar = async () => {
        try {
            const storedAvatar = await AsyncStorage.getItem('avatarId');
            if (storedAvatar) {
                const selectedAva = JSON.parse(storedAvatar);
                const foundAvatar = array.find(item => item.id === selectedAva.id);
                setAvatarSrc(foundAvatar ? foundAvatar.src : require('../db/avatarsData/avatars/no_ava.png'));
            } else {
                setAvatarSrc(require('../db/avatarsData/avatars/no_ava.png'));
            }
        } catch (error: any) {
            console.error("Ошибка при получении аватара:", error.message);
            setAvatarSrc(require('../db/avatarsData/avatars/no_ava.png'));
        }
    };

    useEffect(() => {
        fetchAvatar();
    }, [array, userName]);

    return avatarSrc;
};
