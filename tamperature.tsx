import {s} from "./temperature";
import {Text, TextInput, View} from "react-native";

// @ts-ignore
export function InputTamper({defaultValue, onChangeText, unit}) {
    return (
        <View style={s.container}>
    <TextInput style={s.input}
                      placeholder={"yo click entre tes temperature ici"}
                      keyboardType={"numeric"}
                      maxLength={4}
                      defaultValue={defaultValue}
               onChangeText={onChangeText}
    />

            <Text style={s.unite}>{unit}</Text>
        </View>
    );
}