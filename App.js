import React from "react";
import { Text, View, StatusBar } from 'react-native';

import Buttons from "./src/components/Buttons";
import Display from "./src/components/Display";
import styles from './styles'; //App StyleSheet

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}