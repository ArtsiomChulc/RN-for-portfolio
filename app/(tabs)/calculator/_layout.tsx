import {Stack} from "expo-router";


export default function DescriptionLayout() {
    return (
        <Stack>
            <Stack.Screen name='calculator' options={{
                headerShown: false,
            }}/>
        </Stack>
    );
};