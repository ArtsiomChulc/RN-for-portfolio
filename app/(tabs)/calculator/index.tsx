import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from "@/components/button/Button";
import {COLORS} from "@/constants/colors";

export default function Index() {
    const [result, setResult] = useState<string>('');
    const [current, setCurrent] = useState<string>('');

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

    const renderButton = (value: string) => (
        <Button title={value} backgroundColor={COLORS.buttonCalc}
                widthPercent={value === 'C' ? '60%' : '22%'}
                onClick={() => handleButtonPress(value)}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.currentText}>{current}</Text>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.row}>
                    {renderButton('1')}
                    {renderButton('2')}
                    {renderButton('3')}
                    {renderButton('-')}
                </View>
                <View style={styles.row}>
                    {renderButton('4')}
                    {renderButton('5')}
                    {renderButton('6')}
                    {renderButton('*')}
                </View>
                <View style={styles.row}>
                    {renderButton('7')}
                    {renderButton('8')}
                    {renderButton('9')}
                    {renderButton('/')}
                </View>
                <View style={styles.row}>
                    {renderButton('0')}
                    {renderButton('.')}
                    {renderButton('=')}
                    {renderButton('+')}
                </View>
                <View style={[styles.row, styles.clearBtn]}>
                    {renderButton('C')}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: COLORS.background,
        color: COLORS.gray,
    },
    resultContainer: {
        width: '100%',
        flexGrow:   1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
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
        flex: 2,
        padding: 10,
        marginTop: 10,
        gap: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    clearBtn: {
        alignSelf: 'flex-start',
    },
    buttonText: {
        fontSize: 25,
        color: '#000',
    },
});