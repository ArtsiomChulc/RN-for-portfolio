import {StatusBar} from "expo-status-bar";
// Импортируем компонент StatusBar из библиотеки Expo для управления статус-баром устройства.
import {COLORS} from "@/constants/colors";
// Импортируем объект COLORS, в котором хранятся цветовые константы для приложения.
import styled from "styled-components/native";
// Импортируем styled-components для создания стилизованных компонентов с помощью CSS в React Native.
import CardMemoryGame from "@/components/cardMemoryGame/CardMemoryGame";
// Импортируем компонент CardMemoryGame, который отображает отдельную карту для игры.
import {generateCards} from "@/helpers/generateCards";
// Импортируем функцию generateCards, которая создаёт массив карт с данными для игры.
import {useEffect, useState} from "react";
import Button from "@/components/button/Button";
import PopUp from "@/components/popUp/PopUp";
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, useWindowDimensions, View, StyleSheet} from "react-native";
// Импортируем хуки useEffect и useState из React для работы с состоянием и побочными эффектами.

export default function FindCouple() {
    // Определяем функциональный компонент FindCouple для игры "Найди пару".

    const {width, height} = useWindowDimensions();
    const isPortrait = height > width;

    const gameArray = ['🐵', '🐒', '🦍', '🐇', '🐂', '🐕'];
    // Инициализируем массив gameArray с уникальными значениями эмодзи, которые будут использоваться в игре.

    const [cards, setCards] = useState(generateCards(gameArray));
    // Создаем состояние cards с помощью useState и инициализируем его результатом функции generateCards, которая генерирует массив карт из gameArray.

    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
    // Создаем состояние flippedIndices для хранения индексов перевернутых карт (максимум двух) и инициализируем его пустым массивом.

    const [gameOver, setGameOver] = useState(false);


    useEffect(() => {
        // useEffect выполняет функцию, когда изменяется значение flippedIndices.

        if (flippedIndices.length === 2) {
            // Если перевернуто ровно две карты, выполняется следующая проверка.

            const [firstIndex, secondIndex] = flippedIndices;
            // Деструктурируем flippedIndices для получения индексов двух перевернутых карт.

            if (cards[firstIndex].value === cards[secondIndex].value) {
                // Проверяем, совпадают ли значения перевернутых карт по этим индексам.

                setCards(prevCards => {
                    const newCards = [...prevCards];
                    // Создаем копию массива карт для обновления состояния.

                    newCards[firstIndex].matched = true;
                    newCards[secondIndex].matched = true;
                    // Если карты совпадают, отмечаем их как найденные (matched = true).

                    return newCards;
                    // Возвращаем обновленный массив карт, чтобы изменить состояние.
                });
            }

            setTimeout(() => {
                // Задаем задержку в 500 миллисекунд перед сбросом перевернутых карт.

                setFlippedIndices([]);
                // Очищаем flippedIndices, чтобы разрешить переворот следующих карт.

                setCards(prevCards =>
                    prevCards.map(card => ({ ...card, flipped: card.matched || false }))
                );
                // Перебираем все карты: если карта совпавшая (matched), оставляем её перевернутой, иначе скрываем.
            }, 500);
        }
        // Проверка на окончание игры
        const allMatched = cards.every(card => card.matched);
        if (allMatched) {
            setGameOver(true);
        }
    }, [flippedIndices]); // Добавлено cards в зависимости
    // useEffect сработает каждый раз, когда изменяется flippedIndices, чтобы проверить совпадение карт.

    const handleCardPress = (index: number) => {
        // Определяем функцию handleCardPress, которая вызывается при нажатии на карту.

        if (flippedIndices.length < 2 && !cards[index].flipped && !cards[index].matched) {
            // Проверяем, что перевернуто менее двух карт, и что выбранная карта не совпала ранее и не перевёрнута сейчас.

            setCards(prevCards => {
                const newCards = [...prevCards];
                // Создаем копию массива карт для обновления состояния.

                newCards[index].flipped = true;
                // Переворачиваем выбранную карту, изменяя её состояние flipped на true.

                return newCards;
                // Возвращаем обновленный массив карт, чтобы изменить состояние.
            });

            setFlippedIndices(prev => [...prev, index]);
            // Добавляем индекс перевёрнутой карты в массив flippedIndices.
        }
    };

    const resetGame = () => {
        setCards(generateCards(gameArray)); // Генерируем новые карты
        setFlippedIndices([]); // Сбрасываем перевернутые карты
        setGameOver(false);
    };

    return (
        <SafeAreaView style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
            <PopUp visible={gameOver} title={"Поздравляю!!!"} message={"Так держать..."}
                   onClose={resetGame}/>
            <ScrollView contentContainerStyle={style.gameBoardContainer} style={style.gameBoard}>
                <View style={{width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <Wrapper isPortrait={isPortrait}>
                        {cards.map((card, index) => (
                            <CardMemoryGame
                                key={card.id}
                                value={card.value}
                                flipped={card.flipped || card.matched}
                                onPressHandler={() => handleCardPress(index)}
                            />
                        ))}
                    </Wrapper>
                    <Button title={'Начать сначала'} onClick={resetGame} widthPercent={isPortrait ? '50%' : '20%'}/>
                </View>
            </ScrollView>
            {/* Выводим компонент GameBoard, который отображает доску для игры.
                Для каждой карты создаём компонент CardMemoryGame и передаем:
                 - ключ card.id
                 - значение карты (card.value)
                 - состояние flipped, зависящее от флага карты (flipped || matched)
                 - обработчик нажатия, вызывающий handleCardPress с индексом карты.
            */}

            <StatusBar backgroundColor="#161622" style="light"/>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    gameBoard: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: COLORS.background,
        color: COLORS.gray,
    },
    gameBoardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})


const Wrapper = styled.View<{isPortrait: boolean}>`
    width: ${(props) => props.isPortrait ? '330px' : '720px'};
    height: ${(props) => props.isPortrait ? '80%' : 'auto'};
    margin-bottom: ${({isPortrait}) => isPortrait ? '0' : '10px'};
    margin-top: ${({isPortrait}) => isPortrait ? '0' : '15px'};
    padding: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1px;
`

// Стилизованный компонент GameBoard:
// - Задает высоту и стиль Flexbox для равномерного отображения карт.
// - Устанавливает цвет фона из констант COLORS и расстояние между элементами.
