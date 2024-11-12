import { useEffect, useState } from "react";
import { avatarsDataType } from "@/app/db/avatarsData/avatars";
import {ImageSourcePropType} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAvatar = (array: avatarsDataType[]) => {
    const [avatarSrc, setAvatarSrc] = useState<ImageSourcePropType>(require('../db/avatarsData/avatars/no_ava.png'));

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const storedAvatar = await AsyncStorage.getItem('avatarId');
                if (storedAvatar) {
                    const selectedAva = JSON.parse(storedAvatar);
                    const foundAvatar = array.find(item => item.id === selectedAva.id);
                    setAvatarSrc(foundAvatar ? foundAvatar.src : require('../db/avatarsData/avatars/no_ava.png'));
                }
            } catch (error: any) {
                console.error("Ошибка при получении аватара:", error.message);
                setAvatarSrc(require('../db/avatarsData/avatars/no_ava.png'));
            }
        };

        fetchAvatar().then();
    }, [array]);

    return avatarSrc;
};