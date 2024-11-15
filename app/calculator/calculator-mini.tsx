import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {COLORS} from "@/constants/colors";
import {SafeAreaView} from "react-native-safe-area-context";
import Button from "@/components/button/Button";


const CalculatorMini: React.FC = () => {

    const [value, setValue] = React.useState('0');

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.scrollView}>

                    <View style={styles.inputWrap}>
                        <Text style={styles.input}>{value}</Text>
                    </View>

                    <View style={styles.buttons}>
                        <View style={styles.buttonsWrap}>
                            <Button title={'1'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('1')}/>
                            <Button title={'2'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('2')}/>
                            <Button title={'3'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('3')}/>
                            <Button title={'4'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('4')}/>
                        </View>
                        <View style={styles.buttonsWrap}>
                            <Button title={'5'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('5')}/>
                            <Button title={'6'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('6')}/>
                            <Button title={'7'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('7')}/>
                            <Button title={'8'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('8')}/>
                        </View>
                        <View style={styles.buttonsWrap}>
                            <Button title={'9'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('9')}/>
                            <Button title={'0'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('0')}/>
                            <Button title={'*'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('*')}/>
                            <Button title={'/'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('/')}/>
                        </View>
                        <View style={styles.buttonsWrap}>
                            <Button title={'C'} style={{borderWidth: 3, borderColor: COLORS.buttonColor}} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('C')}/>
                            <Button title={'+'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('+')}/>
                            <Button title={'-'} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('-')}/>
                            <Button title={'='} widthPercent={'20%'} backgroundColor={COLORS.backgroundOpacity} onClick={() => setValue('=')}/>
                        </View>
                    </View>

                </View>
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