import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles"; // Button StyleSheet

export default function Buttons(props){

    const styledButtons = [styles.btn];
    if(props.ac) styledButtons.push(styles.btnAc);
    if(props.zero) styledButtons.push(styles.btnZero);
    if(props.equal) styledButtons.push(styles.btnEqual);
    if(props.operator) styledButtons.push(styles.btnOperator);

    return(
        <TouchableOpacity 
        onPress={() => console.warn("pressed")}
        >
            <Text style={styledButtons}>{props.label}</Text>
        </TouchableOpacity>
    );
}