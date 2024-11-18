import {Tabs} from 'expo-router';
import 'react-native-reanimated';
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import IconTab from "@/components/tabIcon/IconTab";


export default function RootLayout() {

    return (
        <>
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#FFA001",
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#161622",
                    borderTopColor: "#161622",
                    borderTopWidth: 0,
                    height: 84,
                    justifyContent: "center"
                },
            }}>
                <Tabs.Screen name='index' options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({color}) => (
                        <IconTab title={'Домашняя'} colorText={color}><MaterialIcons name="add-to-home-screen" size={24} color={color} /></IconTab>
                    )
                }}/>
                <Tabs.Screen name='(tabs)/(games)' options={{
                    headerShown: false,
                    headerTitle: 'Games',
                    tabBarIcon: ({color}) => (
                        <IconTab colorText={color} title={'Игры'}><Entypo name="game-controller" size={24} color={color} /></IconTab>
                    )
                }}/>
                <Tabs.Screen name='(tabs)/calculator' options={{
                    headerShown: false,
                    title: 'Calculator',
                    tabBarIcon: ({color}) => (
                        <IconTab title={'Калькулятор'} colorText={color}><FontAwesome6 name="clipboard-list" size={24} color={color} /></IconTab>
                    )
                }}/>
                <Tabs.Screen name='(tabs)/description' options={{
                    headerShown: false,
                    title: 'Description',
                    tabBarIcon: ({color}) => (
                        <IconTab title={'Факты'} colorText={color}><FontAwesome6 name="clipboard-list" size={24} color={color} /></IconTab>
                    )
                }}/>
            </Tabs>
        </>
    );
}
