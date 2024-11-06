import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import {findAnimals} from "@/app/db";
import Button from "@/components/button/Button";
import {useState} from "react";
import PopUp from "@/components/popUp/PopUp";
import {useUserName} from "@/helpers/getUserName";


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
            <View style={styles.wrapImg}>
                <Image style={styles.img} source={currentAnimal.image}
                       resizeMode={'contain'}/>
            </View>
            <Text style={styles.text}>{score}/{questionsQuantity}</Text>
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
        height: '100%',
        padding: 10,
        backgroundColor: COLORS.background,
        color: '#CDCDE0'
    },
    wrapper: {
        flex: 1,
        width: '100%',
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
        marginBottom: '10%',
        color: COLORS.gray,
        fontSize: 54,
        borderWidth: 1,
        borderColor: COLORS.gray,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 50
    },
    wrapImg: {
        marginTop: 10,
        marginBottom: 'auto',
        width: 340,
        height: 340,
    },
    img: {
        borderRadius: 20,
        backgroundColor: COLORS.gray,
        width: '100%',
        height: '100%',
    }
});