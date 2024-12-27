import {Text, View, ImageBackground} from "react-native";
import {s} from "./app_layout.js";
// @ts-ignore
import HotBackground from '../assets/images/hot.png';
// @ts-ignore
import ColdBackground from '../assets/images/cold.png';
import {InputTamper} from "@/composent/inputTamperature/tamperature";
import {TemperatureDisplays} from "@/composent/temperatureDisplay/temperatureDisplays";
import {useEffect, useState} from "react";
import {DEFAUL_TEMPERATURE, UNITS, DEFAUL_UNITS} from "./constant.js";
import {getOpositeunite, convertTemperatureTO, isIceTemperature} from "../service/temperature-service";
import {Buttonconvert} from "@/Buttonconvert/Buttonconvert";

export default function App() {
    const [inputValue, setInputValue] = useState(DEFAUL_TEMPERATURE);
    const [currentUnite, setCurrentUnite] = useState(DEFAUL_UNITS);
    const [currentBackground, setcurrentBackground]  = useState()
    const oppositeUnite = getOpositeunite(currentUnite);


    useEffect(() => {
        const temperatureAsFloat = Number.parseFloat(inputValue);
        if(!isNaN(temperatureAsFloat)){
           const isColdBackground = isIceTemperature(inputValue, currentUnite)
            setcurrentBackground(isColdBackground ? ColdBackground : HotBackground);
        }
    },[inputValue])

    function getConvertTamperature (){
        const valueasfloat = Number.parseInt(inputValue);
        return isNaN(valueasfloat) ? "" : convertTemperatureTO(oppositeUnite ,valueasfloat).toFixed(1);
    }

  return <ImageBackground  source={currentBackground} style={s.container}>
      <View style={s.workspace}>
              <TemperatureDisplays value={getConvertTamperature()} unit={oppositeUnite}/>
              <InputTamper unit={currentUnite} onChangeText={setInputValue} defaultValue={DEFAUL_TEMPERATURE}/>
          <View>
              <Buttonconvert unit={currentUnite} onPress={() => {
                  setCurrentUnite(oppositeUnite);
              }}/>
          </View>
      </View>
  </ImageBackground>;
}
