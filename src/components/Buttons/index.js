import React from "react";
import { Text, TouchableHighlight } from "react-native";
import styles from "./styles"; // Button StyleSheet

export default function Buttons(){
    return(
        <TouchableHighlight onPress={() => console.warn("pressed")} style={styles.btn}>
            <Text style={styles.txtButtons}>10</Text>
        </TouchableHighlight>
    );
}