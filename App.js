import React from "react";
import { Text, View, StatusBar, SafeAreaView } from 'react-native';


import Buttons from "./src/components/Buttons";
import Display from "./src/components/Display";
import styles from './styles'; //App StyleSheet

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      
      <Display />
      
      <View style={styles.containerGroups}>
        <View style={styles.groupNumbers}>

          <View style={styles.containerAC}>
            <Buttons label={"AC"} ac={true}/>
          </View>

          <View style={styles.containerOneToNine}>
            <Buttons label={"7"} />
            <Buttons label={"8"} />
            <Buttons label={"9"} />
            <Buttons label={"4"} />
            <Buttons label={"5"} />
            <Buttons label={"6"} />
            <Buttons label={"1"} />
            <Buttons label={"2"} />
            <Buttons label={"3"} />
          </View>

          <View style={styles.containerZeroDot}>
            <Buttons label={"0"} zero={true}/>
            <Buttons label={"."} />
          </View>

        </View>
        
        <View style={styles.groupOperators}>
          <Buttons label={"/"} operator={true}/>
          <Buttons label={"X"} operator={true}/>
          <Buttons label={"-"} operator={true}/>
          <Buttons label={"+"} operator={true}/>
          <Buttons label={"="} equal={true}/>
        </View>

      </View>
    </SafeAreaView>
  );
}