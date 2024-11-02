import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Link} from "expo-router";


export default function RightButton() {
    return (
        <View style={styles.container}>
            <Link href={'/description'} asChild>
                <TouchableOpacity>
                    <MaterialIcons name="description" size={35} color="white"/>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})