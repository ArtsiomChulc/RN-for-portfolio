import {Link} from "expo-router";
import {COLORS} from "@/constants/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {StyleProps} from "react-native-reanimated";

type PropsType = {
    href: string;
    style?: StyleProps;
    isText?: boolean;
    text?: string;
}

export default function GoBack({ href, style, isText = false, text }: PropsType) {
    return (
        <Link href={href} style={style}>
            {isText ? text : <MaterialIcons name="arrow-back" size={34} color={COLORS.link} />}
        </Link>
    );
};