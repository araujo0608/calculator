import React, { useState } from "react";
import { View, StatusBar, SafeAreaView, Modal, Text } from 'react-native';


import Buttons from "./src/components/Buttons";
import Display from "./src/components/Display";
import styles from './styles'; //App StyleSheet

export default function App() {

  const [displayValue, setDisplayValue] = useState("0");
  const [warningPopup, setWarningPopup] = useState(false);
  const [equal, setEqual] = useState(false);

  function addToDisplay(element){
    
    // ignoring some operators before 0
    if(displayValue === '0'){
      if(element === '/' || element === 'x' || element === '+'){
        return
      }
    }

    setDisplayValue(
      displayValue === '0' ? 
      element:
      displayValue + element
    );
  }

  function clearDisplay(){
    setDisplayValue("0");
    setEqual(false);
  }

  function resolveOperation(){
    
    // changing X by * 
    const valueWithX = displayValue;
    const standard = /x/gi;
    const changeBy = "*";
    const formattedValue = valueWithX.replace(standard, changeBy);
  
    // resolving operation with eval()
    try{
      const result = String(eval(formattedValue));
      setDisplayValue(result)
      setEqual(true);
    }catch(err){
      setWarningPopup(true); //calling popup

      setTimeout(() => { //auto shutdown popup
        setWarningPopup(false);
      }, 800);

      setDisplayValue('0');
      setEqual(false);
    }

  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      
      <Display value={displayValue} showEqual={equal}/>
      
      <View style={styles.containerGroups}>
        <View style={styles.groupNumbers}>

          <View style={styles.containerAC}>
            <Buttons label={"AC"} ac={true} onClick={clearDisplay}/>
          </View>

          <View style={styles.containerOneToNine}>
            <Buttons label={"7"} onClick={() => addToDisplay("7")}/>
            <Buttons label={"8"} onClick={() => addToDisplay("8")}/>
            <Buttons label={"9"} onClick={() => addToDisplay("9")}/>
            <Buttons label={"4"} onClick={() => addToDisplay("4")}/>
            <Buttons label={"5"} onClick={() => addToDisplay("5")}/>
            <Buttons label={"6"} onClick={() => addToDisplay("6")}/>
            <Buttons label={"1"} onClick={() => addToDisplay("1")}/>
            <Buttons label={"2"} onClick={() => addToDisplay("2")}/>
            <Buttons label={"3"} onClick={() => addToDisplay("3")}/>
          </View>

          <View style={styles.containerZeroDot}>
            <Buttons label={"0"} zero={true} onClick={() => addToDisplay("0")}/>
            <Buttons label={"."} onClick={() => addToDisplay(".")}/>
          </View>

        </View>
        
        <View style={styles.groupOperators}>
          <Buttons label={"/"} operator={true} onClick={() => addToDisplay("/")}/>
          <Buttons label={"x"} operator={true} onClick={() => addToDisplay("X")}/>
          <Buttons label={"-"} operator={true} onClick={() => addToDisplay("-")}/>
          <Buttons label={"+"} operator={true} onClick={() => addToDisplay("+")}/>
          <Buttons label={"="} equal={true} onClick={resolveOperation}/>
        </View>
      </View>

      <Modal // warning pop-up
      animationType="slide"
      transparent={true}
      visible={warningPopup}
      onRequestClose={() => {
        setWarningPopup(!warningPopup);
      }}
      >
        <View style={styles.warning}>
          <Text style={styles.txtWarning}>SINTAXE INVÁLIDA</Text>
        </View>

      </Modal>

    </SafeAreaView>
  );
}