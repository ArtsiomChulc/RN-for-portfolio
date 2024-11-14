import {Stack} from "expo-router";


export default function DescriptionLayout() {
    return (
        <Stack>
            <Stack.Screen name='calculator-mini' options={{
                headerShown: false,
            }}/>
        </Stack>
    );
};