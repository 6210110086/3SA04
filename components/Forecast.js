import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
    <View >
        <Text style={styles.BText}>{props.main}</Text>
        <Text>{props.description}</Text>
            <Text>{props.temp}°C</Text>
        </View>
    );
   }
   const styles = StyleSheet.create({    //กำหนด backdrop style 
    BText: {
        fontSize: 20 //กำหนดขนาดตัวอักษร
    },
})