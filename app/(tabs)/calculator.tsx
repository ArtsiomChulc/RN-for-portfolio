import React, {useState} from 'react';
import {
    ScrollView,
    StyleProp,
    StyleSheet,
    Text,
    useWindowDimensions,
    View, ViewStyle
} from 'react-native';
import Button from "@/components/button/Button";
import {COLORS} from "@/constants/colors";

export default function Calculator() {
    const [result, setResult] = useState<string>('');
    const [current, setCurrent] = useState<string>('');

    const {width, height} = useWindowDimensions();
    const isPortrait = height > width;

    const handleButtonPress = (value: string) => {
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            setResult('0');
            setCurrent('');
        } else {
            setCurrent(current + value);
        }
    };

    const calculateResult = () => {
        try {
            setResult(eval(current).toString());
        } catch (e) {
            setResult('Error');
        }
    };

    const buttons = [
        '1', '2', '3', '-',
        '4', '5', '6', '*',
        '7', '8', '9', '/',
        '0', '.', '=', '+',
        'C',
    ];

    const renderButton = (value: string) => {
        const isClearButton = value === 'C';
        const widthPercent = isClearButton
            ? isPortrait
                ? '60%'
                : '21%'
            : isPortrait
                ? '21%'
                : '10%';

        return (
            <Button
                key={value}
                title={value}
                backgroundColor={COLORS.buttonCalc}
                widthPercent={widthPercent}
                onClick={() => handleButtonPress(value)}
            />
        );
    };

    const renderButtons = () => {
        if (isPortrait) {
            // Кнопки по 4 в ряд
            const rows = [];
            for (let i = 0; i < buttons.length; i += 4) {
                rows.push(
                    <View key={`row-${i}`} style={styles.row}>
                        {buttons.slice(i, i + 4).map(renderButton)}
                    </View>
                );
            }
            return rows;
        } else {
            // Кнопки по 6 в ряд
            const rows = [];
            for (let i = 0; i < buttons.length; i += 6) {
                rows.push(
                    <View key={`row-${i}`} style={styles.row}>
                        {buttons.slice(i, i + 6).map(renderButton)}
                    </View>
                );
            }
            return rows;
        }
    };

    const containerStyle: StyleProp<ViewStyle> = {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
        color: COLORS.gray,
    }

    return (
        <ScrollView contentContainerStyle={[containerStyle, {flexGrow: 1}]}>
            <View style={styles.resultContainer}>
                <Text style={styles.currentText}>{current}</Text>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                {renderButtons()}
                {/*<View style={[styles.row, styles.clearBtn]}>*/}
                {/*    <Button title={'C'} backgroundColor={COLORS.buttonCalc}*/}
                {/*            widthPercent={isPortrait ? "60%" : "20%"}*/}
                {/*            onClick={() => handleButtonPress('C')}*/}
                {/*    />*/}
                {/*</View>*/}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    resultContainer: {
        width: '100%',
        paddingTop: 30,
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderColor: COLORS.gray,
    },
    resultText: {
        textAlign: 'right',
        fontSize: 36,
        color: COLORS.grayOpacity,
    },
    currentText: {
        textAlign: 'right',
        fontSize: 24,
        color: COLORS.gray,
    },
    buttonsContainer: {
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        gap: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    clearBtn: {
        alignSelf: 'flex-start',
    },
    buttonText: {
        fontSize: 25,
        color: '#000',
    },
});