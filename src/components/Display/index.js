import React from "react";
import { Text, View } from "react-native";

import styles from "./styles"; // Display StyleSheet

export default function Display(){

    return(
        <View style={styles.containerDisplay}>
            <Text style={styles.txtDisplay}> 0</Text>
        </View>
    );
}