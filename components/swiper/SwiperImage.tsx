import styled from 'styled-components/native';
import {avatarsDataType} from "@/app/db/avatarsData/avatars";
import {COLORS} from "@/constants/colors";
import {useState} from 'react';

type Props = {
    sources: Array<avatarsDataType>,
    onClick?: (id: number) => void,
}

type ImageAvaType = {
    id: number
    selectId: number | null
}

export default function SwiperImage({ sources, onClick }: Props) {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const dataImages = sources.map(({ src, id }) => {
        const selectAva = () => {
            setSelectedId(id);
            if (onClick) {
                onClick(id);
            }
        };

        return (
            <ImageWrapBtn key={id} onPress={selectAva}>
                <ImageAva id={id} selectId={selectedId} source={src} />
            </ImageWrapBtn>
        );
    });

    return (
        <ScrollArea
            contentContainerStyle={{alignItems: 'center', justifyContent: 'center', columnGap: 15}}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {dataImages}
        </ScrollArea>
    );
};

const ScrollArea = styled.ScrollView`
    height: 110px;
    flex-direction: row;
    margin-bottom: 20px;
`

const ImageWrapBtn = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    gap: 10px;
`
const ImageAva = styled.Image<ImageAvaType>`
    width: ${(props) => props.id === props.selectId ? '103%' : '100%'};
    height: ${(props) => props.id === props.selectId ? '103%' : '100%'};
    background-color: ${COLORS.gray};
    border-radius: 35px;
    border-width: ${(props) => props.id === props.selectId ? '3px' : '0'};
    opacity: ${(props) => props.id === props.selectId ? 0.45 : 1};
    border-color: ${COLORS.buttonColor};
`