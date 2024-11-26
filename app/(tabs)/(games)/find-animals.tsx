import {
    Image,
    ScrollView, StyleProp,
    StyleSheet,
    Text, TextStyle,
    useWindowDimensions,
    View, ViewStyle
} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import Button from "@/components/button/Button";
import {useState} from "react";
import PopUp from "@/components/popUp/PopUp";
import {useUserName} from "@/helpers/getUserName";
import {findAnimals} from "@/db";
import GoBack from "@/components/goBack/GoBack";


export default function FindAnimals() {
    const [currentQuestionI, setCurrentQuestionI] = useState(0)
    const [score, setScore] = useState(0)
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [popUpTitle, setPopUpTitle] = useState('');
    const [popUpMessage, setPopUpMessage] = useState('');

    const {width, height} = useWindowDimensions();
    const isPortrait = height > width;


    const {userName} = useUserName();
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

    const getBtnWidth = () => {
        if(isPortrait) {
            return '48%'
        } else {
            return '20%'
        }
    }

    const wrapBtnsStyle: StyleProp<ViewStyle> = {
        width: '100%',
        flexDirection: isPortrait ? 'row' : 'row-reverse',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        gap: 10,
        marginBottom: 15
    };

    const wrapperStyle: StyleProp<ViewStyle> = {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 20,
        flexDirection: isPortrait ? 'column' : 'row',
        flexWrap: 'wrap',
    }

    const wrapImgStyle: StyleProp<ViewStyle> = {
        width: isPortrait ? 250 : 160,
        height: isPortrait ? 250 : 160,
    }

    const textStyle: StyleProp<TextStyle> = {
        fontSize: isPortrait ? 24 : 20,
        paddingVertical: isPortrait ? 8 : 4,
    }

    const answersButtons = currentAnimal.answers.map((item, index) => {
        return (
            <Button key={index} title={item} onClick={() => handleAnswer(item)} widthPercent={getBtnWidth()}/>
        )
    })

    const getQuestion = () => {
        return <>
            <View>
                {!isPortrait && <GoBack href={'/all-games'} style={styles.goBack}/>}
                <Text style={[styles.text, textStyle]}>Вопрос № {currentQuestionI + 1}</Text>
                <Text style={[styles.text, textStyle]}>Отгадано: {score}</Text>
                <Text style={[styles.text, textStyle]}>Всего вопросов: {questionsQuantity}</Text>
            </View>
            <View style={[styles.wrapImg, wrapImgStyle]}>
                <Image style={styles.img} source={currentAnimal.image}
                       resizeMode={'contain'}/>
            </View>
            <View style={wrapBtnsStyle}>
                {answersButtons}
                {isPortrait && <GoBack href={'/all-games'} style={styles.goBackText} isText={true} text={'Вернуться на главную'}/>}
            </View>
        </>
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={wrapperStyle}>
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
        padding: 5,
        backgroundColor: COLORS.background,
        color: COLORS.gray
    },
    text: {
        marginBottom: 10,
        color: COLORS.gray,
        borderWidth: 1,
        borderColor: COLORS.grayOpacity,
        paddingHorizontal: 25,
        borderRadius: 50,
        backgroundColor: COLORS.backgroundOpacity
    },
    wrapImg: {
        marginTop: 10,
        marginBottom: 10,
    },
    img: {
        borderRadius: 20,
        backgroundColor: COLORS.gray,
        width: '100%',
        height: '100%',
    },
    goBack: {
        borderWidth: 1,
        borderColor: COLORS.grayOpacity,
        borderRadius: 50,
        padding: 8,
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 40,
        left: -100,
    },
    goBackText: {
        fontSize: 18,
        color: COLORS.link,
        position: 'absolute',
        bottom: -60,
        left: '24%',
    }
});