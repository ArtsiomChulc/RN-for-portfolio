import { StatusBar } from "expo-status-bar";
// Импортируем компонент StatusBar из библиотеки Expo для управления статус-баром устройства.

import { COLORS } from "@/constants/colors";
// Импортируем объект COLORS, в котором хранятся цветовые константы для приложения.

import styled from "styled-components/native";
// Импортируем styled-components для создания стилизованных компонентов с помощью CSS в React Native.

import CardMemoryGame from "@/components/cardMemoryGame/CardMemoryGame";
// Импортируем компонент CardMemoryGame, который отображает отдельную карту для игры.

import { generateCards } from "@/helpers/generateCards";
// Импортируем функцию generateCards, которая создаёт массив карт с данными для игры.

import { useEffect, useState } from "react";
// Импортируем хуки useEffect и useState из React для работы с состоянием и побочными эффектами.

export default function FindCouple() {
    // Определяем функциональный компонент FindCouple для игры "Найди пару".

    const gameArray = ['🐵', '🐒', '🦍', '🦧', '🐶', '🐕'];
    // Инициализируем массив gameArray с уникальными значениями эмодзи, которые будут использоваться в игре.

    const [cards, setCards] = useState(generateCards(gameArray));
    // Создаем состояние cards с помощью useState и инициализируем его результатом функции generateCards, которая генерирует массив карт из gameArray.

    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
    // Создаем состояние flippedIndices для хранения индексов перевернутых карт (максимум двух) и инициализируем его пустым массивом.

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
    }, [flippedIndices]);
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

    return (
        <>
            <GameBoard style={{ paddingTop: '25%' }}>
                {cards.map((card, index) => (
                    <CardMemoryGame
                        key={card.id}
                        value={card.value}
                        flipped={card.flipped || card.matched}
                        onPressHandler={() => handleCardPress(index)}
                    />
                ))}
            </GameBoard>
            {/* Выводим компонент GameBoard, который отображает доску для игры.
                Для каждой карты создаём компонент CardMemoryGame и передаем:
                 - ключ card.id
                 - значение карты (card.value)
                 - состояние flipped, зависящее от флага карты (flipped || matched)
                 - обработчик нажатия, вызывающий handleCardPress с индексом карты.
            */}

            <StatusBar backgroundColor="#161622" style="light" />
            {/* Устанавливаем цвет статус-бара с помощью компонента StatusBar от Expo */}
        </>
    );
};

const GameBoard = styled.SafeAreaView`
    height: 100%;
    flex-grow: 1;
    flex-direction: row;
    padding: 15px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${COLORS.background};
    color: #CDCDE0;
`;
// Стилизованный компонент GameBoard:
// - Задает высоту и стиль Flexbox для равномерного отображения карт.
// - Устанавливает цвет фона из констант COLORS и расстояние между элементами.
