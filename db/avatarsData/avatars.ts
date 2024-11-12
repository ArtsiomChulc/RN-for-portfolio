import {ImageSourcePropType} from "react-native";

export type avatarsDataType = {
    id: number
    src: ImageSourcePropType
}

export const avatarsData: avatarsDataType[] = [
    {
        id: 1,
        src: require('./avatars/ava1.png'),
    },
    {
        id: 2,
        src: require('./avatars/ava2.png'),
    },
    {
        id: 3,
        src: require('./avatars/ava3.png'),
    },
    {
        id: 4,
        src: require('./avatars/ava4.png'),
    },
    {
        id: 5,
        src: require('./avatars/ava5.png'),
    },
    {
        id: 6,
        src: require('./avatars/ava6.png'),
    },
    {
        id: 7,
        src: require('./avatars/ava7.webp'),
    },
    {
        id: 8,
        src: require('./avatars/ava8.webp'),
    },
    {
        id: 9,
        src: require('./avatars/ava9.webp'),
    },
    {
        id: 10,
        src: require('./avatars/ava10.webp'),
    },
]