import React, { useEffect, useState } from 'react'
import { Text,ImageBackground,StyleSheet,View} from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=78a7b2e3cb6598951eb5abe535afa150`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                    });
                })
            .catch((error) => {
                console.warn(error);
                });
            }
        }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
        })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.BBlack}>
                <Text style={styles.BText}>Zip Code is {props.zipCode}</Text>  
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
        </View> 
    );
}
const styles = StyleSheet.create({    //กำหนด backdrop style 
    backdrop: {
        flexDirection: 'column',
        width: '100%',
        height:'100%'
    },
    BText: {
        fontSize: 40 //กำหนดขนาดตัวอักษร
    },
    BBlack:{
        justifyContent: 'center', //center แนวแกนตั้ง
        alignItems: 'center', //center แนวแกนนอน
        backgroundColor: 'rgba(0,0,0,0.3)',
        height:'50%',
        width:'100%'
    }
})