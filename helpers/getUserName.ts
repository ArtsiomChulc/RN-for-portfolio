import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

export const useUserName = () => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserName = async () => {
            const name = await AsyncStorage.getItem("name");
            if (!name) setUserName(null)
            setUserName(name);
        };

        fetchUserName();
    }, [userName, setUserName]);

    return {userName, setUserName};
};