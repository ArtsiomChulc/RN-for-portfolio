import {ImageSourcePropType} from "react-native";

export type avatarsDataType = {
    id: number
    src: ImageSourcePropType
}

export const avatarsData: avatarsDataType[] = [
    {
        id: 1,
        src: require('./assets/images/avatars/1.png'),
    },
]