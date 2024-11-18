import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import Button from "@/components/button/Button";
import {useState} from "react";
import PopUp from "@/components/popUp/PopUp";
import {useUserName} from "@/helpers/getUserName";
import {findAnimals} from "@/db";


export default function FindAnimals() {
    const [currentQuestionI, setCurrentQuestionI] = useState(0)
    const [score, setScore] = useState(0)
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [popUpTitle, setPopUpTitle] = useState('');
    const [popUpMessage, setPopUpMessage] = useState('');

    const userName = useUserName();
    const questionsQuantity = findAnimals.length;

    const currentAnimal = findAnimals[currentQuestionI]

    const handleAnswer = (answer: string) => {
        if (currentAnimal.correctAnswer === answer) {
            setScore(score + 1);
            setPopUpTitle("Правильно!");
            setPopUpMessage("Вы угадали животное!");
            setPopUpVisible(true);

            setTimeout(() => {
                setPopUpVisible(false);
            }, 2000);
        } else {
            setPopUpTitle("Неправильно!");
            setPopUpMessage(`Правильный ответ: ${currentAnimal.correctAnswer}`);
            setPopUpVisible(true);
        }

        if (currentQuestionI < findAnimals.length - 1) {
            setCurrentQuestionI(currentQuestionI + 1);
        } else {
            setPopUpTitle(`Игра закончена ${userName ? userName : ''}!`);
            setPopUpMessage(`Ваш счет: ${score + 1} из ${findAnimals.length}`);
            setPopUpVisible(true);
            setCurrentQuestionI(0);
            setScore(0);
        }
    };

    const answersButtons = currentAnimal.answers.map((item, index) => {
        return (
            <View key={index} style={styles.btns}>
                <Button title={item} onClick={() => handleAnswer(item)}/>
            </View>
        )
    })

    const getQuestion = () => {
        return <>
            <Text style={styles.text}>Вопрос № {currentQuestionI + 1}</Text>
            <View style={styles.wrapImg}>
                <Image style={styles.img} source={currentAnimal.image}
                       resizeMode={'contain'}/>
            </View>
            <Text style={styles.text}>Отгадано: {score}</Text>
            <Text style={styles.text}>Всего вопросов: {questionsQuantity}</Text>
            <View style={styles.wrapBtn}>
                {answersButtons}
            </View>
        </>
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.wrapper}>
                    {getQuestion()}
                </ScrollView>
                <PopUp
                    visible={popUpVisible}
                    title={popUpTitle}
                    message={popUpMessage}
                    onClose={() => setPopUpVisible(false)}
                />
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.background,
        color: COLORS.gray
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 20,
    },
    wrapBtn: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 15
    },
    btns: {
        width: '48%',
    },
    text: {
        marginBottom: 10,
        color: COLORS.gray,
        fontSize: 24,
        borderWidth: 1,
        borderColor: COLORS.grayOpacity,
        paddingHorizontal: 25,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: COLORS.backgroundOpacity
    },
    wrapImg: {
        marginTop: 10,
        marginBottom: 10,
        width: 250,
        height: 250,
    },
    img: {
        borderRadius: 20,
        backgroundColor: COLORS.gray,
        width: '100%',
        height: '100%',
    }
});