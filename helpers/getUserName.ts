import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useUserName = () => {
    const [name, setName] = useState<string>('');

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const storedName = await AsyncStorage.getItem("name");
                if (storedName !== null) {
                    setName(storedName);
                }
            } catch (error: any) {
                console.error("Ошибка при получении имени пользователя:", error.message);
            }
        };

        fetchUserName();
    }, []);

    return name;
};