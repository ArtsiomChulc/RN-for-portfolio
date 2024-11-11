import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {COLORS} from "@/constants/colors";
import Button from "@/components/button/Button";

interface PopUpProps {
    visible: boolean;
    title: string;
    message: string;
    onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({visible, title, message, onClose}) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <Button title="Закрыть" onClick={onClose}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: COLORS.background,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: COLORS.gray,
    },
    message: {
        fontSize: 16,
        marginBottom: 50,
        textAlign: 'center',
        color: COLORS.gray,
    },
});

export default PopUp;