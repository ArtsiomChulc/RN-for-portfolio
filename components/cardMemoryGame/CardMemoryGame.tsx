import styled from "styled-components/native";
import {COLORS} from "@/constants/colors";

type CardMemoryGameType = {
    value?: string;
    flipped: boolean;
    onPressHandler?: () => void;
}

export default function CardMemoryGame({flipped, value, onPressHandler}: CardMemoryGameType) {
    return (
        <CardContainer flipped={flipped} onPress={onPressHandler}>
            {flipped ? <CardValue>
                {value}
            </CardValue> : null}
        </CardContainer>
    );
};

const CardContainer = styled.TouchableOpacity<{flipped: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 15%;
    background-color: ${({flipped}) => flipped ? COLORS.buttonColor : COLORS.gray};
`

const CardValue = styled.Text`
    font-size: 38px;
    text-align: center;
    color: ${COLORS.background};
`