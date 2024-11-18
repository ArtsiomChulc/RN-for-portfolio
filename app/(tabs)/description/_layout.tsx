import {Stack} from "expo-router";


export default function DescriptionLayout() {
    return (
        <Stack>
            <Stack.Screen name='description' options={{
                headerShown: false,
            }}/>
        </Stack>
    );
};