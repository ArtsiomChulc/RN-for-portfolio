import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import {SafeAreaView} from "react-native-safe-area-context";

interface Section {
    title: string;
    content: string;
}

const SECTIONS: Section[] = [
    {
        title: 'Про животных',
        content: 'Животные - это многоклеточные эукариоты, которые классифицируются на основе их характеристик, таких как форма тела, питание, поведение и среда обитания. Существует огромное количество видов животных на Земле, и они играют важную роль в экосистемах планеты. Вот несколько интересных фактов о животных:\n' +
            '\n' +
            'Существует примерно 8,7 миллиона видов животных на Земле, но только около 1,2 миллиона из них классифицированы и описаны наукой.\n' +
            'Самое большое животное на Земле - это синий кит, который может достигать длины более 30 метров и веса более 200 тонн.\n' +
            'Самое маленькое животное на Земле - это наноботриус, которое может быть меньше 0,1 миллиметра в длину и весить менее 0,000001 грамма.\n' +
            'Самое быстрое животное на Земле - это пуля, которая может достигать скорости более 1000 километров в час.\n' +
            'Самое медленное животное на Земле - это черепаха, которая может передвигаться со скоростью менее 0,001 километра в час.\n' +
            'Самое старое животное на Земле - это морская звезда, которая может жить более 4000 лет.\n' +
            'Самое молодое животное на Земле - это плод, который может жить всего несколько минут после рождения, если он не прикреплен к матери.\n' +
            'Самое тяжелое животное на Земле - это синий кит, который может весить более 200 тонн.\n' +
            'Самое легкое животное на Земле - это птица-колибри, которая может весить менее 0,000002 грамма.\n' +
            'Самое умное животное на Земле - это дельфин, который может решать математические задачи и понимать язык жестов.\n' +
            'Самое глупое животное на Земле - это морская звезда, которая не имеет мозга и не может думать или чувствовать боль.',
    },
    {
        title: 'Деревья',
        content: 'Интересный факт о деревьях: они могут общаться друг с другом с помощью подземной сети грибов, известной как "микоризная сеть". Эти грибы связывают корни деревьев и позволяют им обмениваться питательными веществами и даже сигналами о стрессах, таких как засуха или нападение вредителей. Это взаимодействие помогает деревьям поддерживать здоровье и выживаемость, а также способствует укреплению экосистемы в целом. Некоторые исследования показывают, что деревья могут поддерживать друг друга, передавая углеводы тем, кто находится в более уязвимом состоянии.',
    },
    {
        title: 'Вода',
        content: 'Интересный факт о воде: она является единственным веществом на Земле, которое может существовать в трех состояниях — жидкости, твердом (лед) и газообразном (пар) — при обычных условиях. Это уникальное свойство воды связано с её молекулярной структурой и водородными связями, которые образуются между молекулами.\n' +
            '\n' +
            'Кроме того, вода обладает высокой теплоемкостью, что означает, что она может поглощать и удерживать большое количество тепла, не сильно изменяя свою температуру. Это делает воду важным регулятором климата на Земле и способствует поддержанию стабильной температуры в экосистемах.',
    },
    {
        title: 'Огонь',
        content: 'Интересный факт об огне: он не является веществом, а процессом сгорания. Огонь возникает, когда горючее вещество (например, дерево или уголь) реагирует с кислородом в воздухе, выделяя тепло и свет.\n' +
            '\n' +
            'Этот процесс требует трех элементов, известных как "треугольник огня": топливо, кислород и тепло. Если убрать один из этих элементов, огонь погаснет.\n' +
            '\n' +
            'Кроме того, огонь может быть использован для различных целей: от обогрева и приготовления пищи до создания энергии и в промышленных процессах. Однако огонь также требует осторожности, так как он может быстро стать опасным и привести к пожарам.',
    },
    {
        title: 'Почва',
        content: 'Интересный факт о почве: она является сложной экосистемой, состоящей не только из минералов и органических веществ, но и из множества живых организмов. В одном грамме почвы может содержаться миллионы бактерий, грибы, простейшие и даже микроскопические черви.\n' +
            '\n' +
            'Почва играет ключевую роль в экосистеме, так как она обеспечивает растения питательными веществами, водой и поддерживает их корневую систему. Кроме того, почва помогает фильтровать воду и способствует циклу углерода, удерживая углерод и уменьшая его концентрацию в атмосфере. Это делает почву важным элементом в борьбе с изменением климата.'
    },
    {
        title: 'Воздух',
        content: 'Воздух - это газообразная смесь, состоящая в основном из азота (78%), кислорода (21%) и других газов в небольших количествах. Однако, есть много интересных фактов о воздухе, которые вы, возможно, не знали.\n' +
            '\n' +
            'Воздух имеет вес - около 1,225 грамма на литр при стандартных условиях температуры и давления.\n' +
            'Воздух состоит из примерно 78% азота, 21% кислорода и небольших количеств других газов, таких как аргон (0,93%), углекислый газ (0,04%) и другие газы в еще меньших количествах.\n' +
            'Кислород составляет около 21% воздуха, но это около 1 миллиарда тонн кислорода, который поддерживает жизнь на Земле.\n' +
            'Воздух движется от высоких давлений к низким давлениям. Это называется движением воздуха или ветром.\n' +
            'Воздух может быть очень холодным или очень горячим. Самый холодный воздух был зарегистрирован в Антарктиде и составлял -89 градусов по Цельсию. Самый горячий воздух был зарегистрирован в Death Valley, Калифорния, и составлял 56,7 градусов по Цельсию.\n' +
            'Воздух может быть очень сухим или очень влажным. Самый сухой воздух был зарегистрирован в Death Valley, Калифорния, и составлял относительную влажность 2%. Самый влажный воздух был зарегистрирован в Браззилии и составлял относительную влажность 100%.\n' +
            'Воздух может быть очень чистым или очень загрязненным. Самый чистый воздух был зарегистрирован в Антарктиде, где он практически свободен от загрязнений. Самый загрязненный воздух был зарегистрирован в больших городах, таких как Пекин, Китай, где он может содержать высокие уровни загрязняющих веществ, таких как диоксид серы и частицы PM2.5.'
    },
    {
        title: 'Космос',
        content: 'Космос - это огромная пустота, заполненная галактиками, звездами, планетами, астероидами, кометами и другими небесными телами. Вот несколько интересных фактов о космосе:\n' +
            '\n' +
            'Космос имеет возраст около 13,8 миллиардов лет.\n' +
            'Диаметр видимой Вселенной составляет около 100 миллиардов световых лет.\n' +
            'В видимой Вселенной насчитывается около 100 миллиардов галактик, каждая из которых содержит от нескольких миллионов до нескольких триллионов звезд.\n' +
            'Самая большая галактика во Вселенной - это IC 1101, которая имеет диаметр около 6 миллионов световых лет.\n' +
            'Самая маленькая галактика во Вселенной - это Ультима-Малая, которая имеет диаметр всего 600 световых лет.\n' +
            'Самая большая звезда во Вселенной - это R136a1, которая имеет диаметр около 1300 солнечных диаметров.\n' +
            'Самая маленькая звезда во Вселенной - это Огненок, которая имеет диаметр всего 8 метров.\n' +
            'Самое старое известное небесное тело во Вселенной - это HD 140283, которое имеет возраст около 14 миллиардов лет.\n' +
            'Самое молодое известное небесное тело во Вселенной - это V838 Монокероти, которое было создано всего несколько тысяч лет назад.\n' +
            'Самое далекое известное небесное тело во Вселенной - это GN-z11, которое находится на расстоянии около 13,4 миллиардов световых лет от Земли.\n' +
            'Самое близкое известное небесное тело во Вселенной - это Солнце, которое находится на расстоянии около 150 миллионов километров от Земли.\n' +
            'Самое холодное известное небесное тело во Вселенной - это Boomerang Nebula, которое имеет температуру всего -270 градусов Цельсия.\n' +
            'Самое горячее известное небесное тело во Вселенной - это SGR 1806-20, которое имеет температуру более 100 миллионов градусов Цельсия.\n' +
            'Эти факты лишь некоторые из многих фактов о космосе, которые могут вас удивить и заинтересовать. Космос - это огромная и загадочная область, которую мы все еще пытаемся понять и исследовать.'
    }
];

const Description: React.FC = () => {
    const [activeSections, setActiveSections] = useState<number[]>([]);

    const renderHeader = (section: Section) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    const renderContent = (section: Section) => {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}>{section.content}</Text>
            </View>
        );
    };

    const updateSections = (activeSections: number[]) => {
        setActiveSections(activeSections);
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}
                            style={styles.scrollView}>
                    <Accordion
                        containerStyle={[{width: '100%'}, styles.wrapper]}
                        sections={SECTIONS}
                        activeSections={activeSections}
                        renderHeader={renderHeader}
                        renderContent={renderContent}
                        onChange={updateSections}
                    />
                </ScrollView>
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: COLORS.background,
        color: COLORS.gray
    },
    wrapper: {
        backgroundColor: COLORS.background,
    },
    scrollView: {
        width: '100%',
        height: '100%',
    },
    header: {
        padding: 10,
        backgroundColor: COLORS.grayOpacity,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.gray
    },
    contentText: {
        textAlign: 'left',
        lineHeight: 24,
        padding: 10,
        fontSize: 18,
        color: COLORS.gray
    },
    content: {
        padding: 10,
        backgroundColor: COLORS.backgroundAccordion,
        color: COLORS.gray,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.backgroundOpacity,
    },
});

export default Description;