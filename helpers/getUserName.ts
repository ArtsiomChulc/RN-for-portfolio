import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

export const useUserName = () => {
    const [userName, setUserName] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchUserName = async () => {
            setIsLoading(true)
            const name = await AsyncStorage.getItem("name");
            if (!name) setUserName(null)
            setUserName(name);
            setIsLoading(false)
        };

        fetchUserName();
    }, [userName, setUserName]);

    return {userName, setUserName, isLoading};
};