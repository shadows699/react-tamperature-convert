import {s} from "./Buttonconvert_style";
import {Text, TouchableOpacity} from "react-native";

// @ts-ignore
export function Buttonconvert({onPress,unit}) {
    return <TouchableOpacity onPress={onPress} style={s.button}>
        <Text style={s.text}>Convertir en {unit}</Text>
    </TouchableOpacity>;
}