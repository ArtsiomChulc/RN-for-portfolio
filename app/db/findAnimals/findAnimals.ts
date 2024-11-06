import {ImageSourcePropType} from "react-native";

type animalsGame = {
    id: number
    name: string
    image: ImageSourcePropType
    correctAnswer: string
    answers: Array<string>
}

export const findAnimals: animalsGame[] = [
    {
        id: 1,
        name: "Лев",
        image: require('./images/lion.png'),
        correctAnswer: "Лев",
        answers: [
            'Слон', 'Крокодил', 'Леопард', 'Лев',
        ]
    },
    {
        id: 2,
        name: "Медведь",
        image: require('./images/bear.png'),
        correctAnswer: "Медведь",
        answers: [
            'Бобер', 'Лиса', 'Медведь', 'Тигр',
        ]
    },
    {
        id: 3,
        name: "Корова",
        image: require('./images/cow.png'),
        correctAnswer: "Корова",
        answers: [
            'Овца', 'Лошадь', 'Корова', 'Коза',
        ]
    },
    {
        id: 4,
        name: "Змея",
        image: require('./images/snack.png'),
        correctAnswer: "Змея",
        answers: [
            'Ящерица', 'Змея', 'Крокодил', 'Черепаха',
        ]
    },
    {
        id: 5,
        name: "Лошадь",
        image: require('./images/horse.png'),
        correctAnswer: "Лошадь",
        answers: [
            'Осел', 'Зебра', 'Лошадь', 'Кобыла',
        ]
    },
    {
        id: 6,
        name: "Собака",
        image: require('./images/dog.png'),
        correctAnswer: "Собака",
        answers: [
            'Кошка', 'Собака', 'Мышь', 'Хомяк',
        ]
    },
    {
        id: 7,
        name: "Обезьяна",
        image: require('./images/monkey.png'),
        correctAnswer: "Обезьяна",
        answers: [
            'Петух', 'Обезьяна', 'Попугай', 'Слон',
        ]
    },
    {
        id: 8,
        name: "Жираф",
        image: require('./images/zhiraf.webp'),
        correctAnswer: "Жираф",
        answers: [
            'Зебра', 'Лев', 'Жираф', 'Слон',
        ]
    },
    {
        id: 9,
        name: "Зебра",
        image: require('./images/zebra.png'),
        correctAnswer: "Зебра",
        answers: [
            'Лошадь', 'Зебра', 'Осел', 'Коник',
        ]
    }
];