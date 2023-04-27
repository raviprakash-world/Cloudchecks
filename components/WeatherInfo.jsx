import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { currentWeather } from '../constants/Data';
// console.log(colors);
const { PRIMARY_COLOR, SECONDARY_COLOR } =  colors
// console.log(PRIMARY_COLOR);
const WeatherInfo = ({currentWeather,unitsSystem}) => {

 

    console.log(currentWeather);

   const {
     current:{ feelslike_f,feelslike_c,air_quality,cloud,condition,is_day},location:{name,region,tz_id}
    } = currentWeather

//     console.log(name);
//    const {
//         current: { temperature,weather_descriptions },
//         // weather: [details],
//         name,
//     } = currentWeather
    const { icon,  text ,code} = condition

    // console.log(temperature);

    // console.log(`../assets/${is_day?"day":"night"}/${code}.png`);

    // const iconUrl = `https://openweathermap.org/img/wn/10d@4x.png`
    const url = icon;
const splitUrl = url.split("/");
const extractedPath = `/${splitUrl[splitUrl.length - 2]}/${splitUrl[splitUrl.length - 1]}`;

console.log(extractedPath); // Output: /night/143.png
    const iconUrl = `../assets/${extractedPath}`
    console.log(iconUrl);
    const imageSource = { uri: iconUrl };
    console.log(imageSource);

    return (
        <View style={styles.weatherInfo}>
            <Text>{name}</Text>
           <Image style={styles.weatherIcon} source={imageSource} />


            <Text style={styles.textPrimary}>{unitsSystem === 'm' ? feelslike_c : feelslike_f
}°</Text>
            <Text style={styles.weatherDescription}>{tz_id}</Text>
            <Text style={styles.texSecondary}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },
    weatherDescription: {
        textTransform: 'capitalize',
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR,
    },
    texSecondary: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10,
    },
})


export default WeatherInfo