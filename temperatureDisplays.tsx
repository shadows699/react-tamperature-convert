import {s} from "./temperatureDisplay";
import {Text} from "react-native";

export function TemperatureDisplays({value, unit}) {
    return <Text style={s.text}>
        {value} {unit}
    </Text>;
}