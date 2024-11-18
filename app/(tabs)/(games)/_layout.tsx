import {Stack} from "expo-router";


export default function TabLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name='all-games' options={{
                    headerShown: false
                }}/>
                <Stack.Screen name='find-animals' options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name='find-couple' options={{
                    headerShown: false,
                }}/>
            </Stack>
        </>
    );
};