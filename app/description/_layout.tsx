import {Slot, Stack} from "expo-router";


export default function DescriptionLayout() {
    return (
        <Stack>
            <Stack.Screen name='description-page' options={{
                headerShown: false,
            }}/>
        </Stack>
    );
};