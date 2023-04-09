import React from "react";
import { Text, View } from "react-native";
import { AppLoading } from 'expo';
import { useFonts } from '@expo-google-fonts/poppins';


import styles from "./styles"; // Display StyleSheet

export default function Display(){
    
    const [fontsLoaded, error] = useFonts({
        'Poppins-Medium': require('./../../../assets/fonts/Poppins-Medium.ttf'),
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return(
        <View style={styles.containerDisplay}>
            <Text style={styles.txtDisplay}>0</Text>
        </View>
    );
}