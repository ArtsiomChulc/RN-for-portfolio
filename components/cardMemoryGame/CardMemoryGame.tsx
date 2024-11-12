import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { COLORS } from "@/constants/colors";
import { Animated, TouchableOpacity } from "react-native";

type CardMemoryGameType = {
    value?: string;
    flipped: boolean;
    onPressHandler?: () => void;
};

export default function CardMemoryGame({
       flipped,
       value,
       onPressHandler,
}: CardMemoryGameType) {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(rotateAnim, {
            toValue: flipped ? 1 : 0,
            duration: 160,
            useNativeDriver: true,
        }).start();
    }, [flipped]);

    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"],
    });

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <CardContainer style={{ transform: [{ rotateY: rotateInterpolate }] }}>
                <CardFace flipped={flipped} style={{ opacity: flipped ? 1 : 0 }}>
                    <CardValue>{value || ''}</CardValue>
                </CardFace>
                <CardFace flipped={flipped} style={{ opacity: flipped ? 0 : 1 }}>
                    <CardValue>🙂‍</CardValue>
                </CardFace>
            </CardContainer>
        </TouchableOpacity>
    );
}

const CardContainer = styled(Animated.View)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    perspective: 1000px;
`;

const CardFace = styled(Animated.View)<{flipped: boolean}>`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    align-items: center;
    justify-content: center;
    background-color: ${({ flipped }) => (flipped ? COLORS.buttonColor : COLORS.gray)};
`;

const CardValue = styled.Text`
    font-size: 38px;
    text-align: center;
    color: ${COLORS.background};
`;