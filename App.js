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
      <View style={styles.containerButtons}>
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
      </View>
    </SafeAreaView>
  );
}