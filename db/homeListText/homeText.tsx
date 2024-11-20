import {ReactElement} from "react";
import {StyleSheet, Text} from "react-native";
import {COLORS} from "@/constants/colors";

export type HomeTextType = {
    id: number
    title: ReactElement
    text: ReactElement
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: "center",
        color: COLORS.gray,
        marginBottom: 15,
    },
    title_color: {
        backgroundColor: COLORS.backgroundAccordion,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 40,
    },
    main_title_color: {
        backgroundColor: COLORS.grayOpacity,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 18,
        color: COLORS.buttonColor,
        marginBottom: 15,
    },
    text: {
        fontSize: 14,
        color: COLORS.gray,
        marginBottom: 20,
    },
    main_text: {
        fontSize: 24,
        color: COLORS.grayOpacity,
        textAlign: 'center',
        marginBottom: 20,
    },
    textTitle_color: {
        backgroundColor: COLORS.backgroundOpacity,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 40,
    }
})

export const homeListText: HomeTextType[] = [
    {
        id: 123,
        title: <Text style={[styles.title, styles.main_title_color]}>"Природа для детей"</Text>,
        text: <>
            <Text style={styles.main_text}>это увлекательное и познавательное
                мобильное приложение, которое предлагает детям уникальное
                сочетание игры и обучения. В приложении представлены две
                веселые детские игры, интересные факты о природе и простой
                в
                использовании калькулятор.</Text>
        </>
    },
    {
        id: 1,
        title: <Text style={[styles.title, styles.title_color]}>Игры для детей:</Text>,
        text: <>
            <Text style={[styles.textTitle, styles.textTitle_color]}>Угадай животного:</Text>
            <Text style={styles.text}>В этой игре дети смогут проверить свои знания о
                животных.
                На экране будет показано изображение животного, и игроки должны отгадать
                его название по подсказкам.
                Игра развивает память, внимание и расширяет кругозор.</Text>
            <Text style={[styles.textTitle, styles.textTitle_color]}>Найди пару:</Text>
            <Text style={styles.text}>Эта игра на память предлагает детям найти пары одинаковых карточек с
                изображениями животных.
                Она помогает развивать логику, концентрацию и память, а также приносит
                много радости!
            </Text>
        </>
    },
    {
        id: 2,
        title: <Text style={[styles.title, styles.title_color]}>Интересные факты о природе:</Text>,
        text: <Text style={styles.text}>В этом разделе дети смогут узнать множество
            интересных фактов о мире
            природы.
            Каждое открытие будет сопровождаться яркими иллюстрациями и простыми
            объяснениями,
            которые делают обучение увлекательным и доступным.</Text>
    },
    {
        id: 3,
        title: <Text style={[styles.title, styles.title_color]}>Калькулятор:</Text>,
        text: <Text style={styles.text}>Удобный и простой в использовании калькулятор
            поможет детям научиться
            основам арифметики.
            Калькулятор имеет красочный интерфейс и понятные кнопки,
            что делает его идеальным инструментом для первых шагов в математике.</Text>
    },
    {
        id: 4,
        title: <Text style={[styles.title, styles.title_color]}>Преимущества приложения:</Text>,
        text: <Text style={styles.text}>Образовательный контент: Приложение сочетает
            развлечение с обучением,
            что способствует развитию детей. Интуитивно понятный интерфейс:
            Яркий и дружелюбный дизайн, который легко воспринимается детьми.
            Разнообразие функций: Игры, факты и калькулятор в одном приложении,
            что делает его универсальным инструментом для обучения и развлечения.
            Подходит для разных возрастов: Игра и факты адаптированы для детей разных
            возрастов,
            что позволяет всем найти что-то интересное.</Text>
    },
    {
        id: 5,
        title: <Text style={[styles.title, styles.title_color]}>Заключение:</Text>,
        text: <Text style={styles.text}>"Природа для детей" — это идеальное приложение для
            родителей, которые
            хотят,
            чтобы их дети развивались и учились, играя.
            Загружайте приложение и погружайтесь в удивительный мир природы и
            знаний!</Text>
    }
]