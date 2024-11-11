import {ImageSourcePropType} from "react-native";

export type avatarsDataType = {
    id: number
    src: ImageSourcePropType
}

export const avatarsData: avatarsDataType[] = [
    {
        id: 1,
        src: require('@/app/db/avatarsData/avatars/ava1.png'),
    },
    {
        id: 2,
        src: require('@/app/db/avatarsData/avatars/ava2.png'),
    },
    {
        id: 3,
        src: require('@/app/db/avatarsData/avatars/ava3.png'),
    },
    {
        id: 4,
        src: require('@/app/db/avatarsData/avatars/ava4.png'),
    },
    {
        id: 5,
        src: require('@/app/db/avatarsData/avatars/ava5.png'),
    },
    {
        id: 6,
        src: require('@/app/db/avatarsData/avatars/ava6.png'),
    },
    {
        id: 7,
        src: require('@/app/db/avatarsData/avatars/ava7.webp'),
    },
    {
        id: 8,
        src: require('@/app/db/avatarsData/avatars/ava8.webp'),
    },
    {
        id: 9,
        src: require('@/app/db/avatarsData/avatars/ava9.webp'),
    },
    {
        id: 10,
        src: require('@/app/db/avatarsData/avatars/ava10.webp'),
    },
]