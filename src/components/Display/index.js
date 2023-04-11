import React from "react";
import { Text, View } from "react-native";

import styles from "./styles"; // Display StyleSheet

export default function Display(props){

    return(
        <View style={styles.containerDisplay}>
            <Text style={styles.txtDisplay} numberOfLine={4}>
               {props.showEqual ? 
                <Text style={styles.txtEqual}>=</Text> :
                null
                }
               {props.value}
            </Text>
        </View>
    );
}