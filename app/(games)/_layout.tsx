import {Stack} from "expo-router";


export default function TabLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name='findAnimals' options={{
                    headerShown: false
                }}/>
            </Stack>
        </>
    );
};