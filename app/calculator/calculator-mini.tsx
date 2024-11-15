import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/button/Button";

const CalculatorMini: React.FC = () => {
    const [number, setNumber] = React.useState<string>('0');
    const [previous, setPrevious] = React.useState<string | null>(null);
    const [operator, setOperator] = React.useState<string | null>(null);

    const getNumbers = (input: string) => {
        setNumber(number === '0' ? input : number + input);
    };

    const getOperation = (nextOperator: string) => {
        if (operator && previous !== null && number === '') {
            // If an operator is already set and no new number entered, replace the operator
            setOperator(nextOperator);
            return;
        }

        if (operator && previous !== null) {
            // If an operator is already set, calculate the result so far
            calculate();
        } else {
            // Set the current number as previous if there's no previous calculation
            setPrevious(number);
        }

        setOperator(nextOperator);
        setNumber('');  // Clear current input
    };

    const calculate = () => {
        if (previous !== null && operator) {
            const prev = parseFloat(previous);
            const current = parseFloat(number || '0');  // Handle cases where `number` might be empty
            let result: number;

            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    return;
            }

            setNumber(result.toString());
            setPrevious(null);  // Clear previous to show only the result
            setOperator(null);  // Reset the operator
        }
    };

    const clearInput = () => {
        setNumber('0');
        setPrevious(null);
        setOperator(null);
    };

    const display = `${number}`;

    console.log(display)

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.scrollView}>
                    <View style={styles.inputWrap}>
                        <Text style={styles.input}>{display}</Text>
                    </View>

                    <View style={styles.buttons}>
                        <View style={styles.buttonsWrap}>
                            <Button title={'1'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('1')} />
                            <Button title={'2'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('2')} />
                            <Button title={'3'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('3')} />
                            <Button title={'4'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('4')} />
                        </View>
                        <View style={styles.buttonsWrap}>
                            <Button title={'5'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('5')} />
                            <Button title={'6'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('6')} />
                            <Button title={'7'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('7')} />
                            <Button title={'8'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('8')} />
                        </View>
                        <View style={styles.buttonsWrap}>
                            <Button title={'9'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('9')} />
                            <Button title={'0'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getNumbers('0')} />
                            <Button title={'*'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getOperation('*')} />
                            <Button title={'/'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getOperation('/')} />
                        </View>
                        <View style={styles.buttonsWrap}>
                            <Button title={'C'} style={{ borderWidth: 3, borderColor: COLORS.buttonColor }} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={clearInput} />
                            <Button title={'+'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getOperation('+')} />
                            <Button title={'-'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => getOperation('-')} />
                            <Button title={'='} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={calculate} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <StatusBar backgroundColor="#161622" style="light" />
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
        color: COLORS.gray,
    },
    scrollView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentText: {
        textAlign: 'left',
        lineHeight: 24,
        padding: 10,
        fontSize: 18,
        color: COLORS.gray
    },
    buttons: {
        width: '100%',
        alignItems: 'center',
        gap: 10,
        marginBottom: 'auto',
    },
    buttonsWrap: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    inputWrap: {
        width: '100%',
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: COLORS.gray,
        marginBottom: 'auto',
        marginTop: 50
    },
    input: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'right',
        fontSize: 28,
        color: COLORS.gray,
        padding: 12,
    }
});

export default CalculatorMini;
