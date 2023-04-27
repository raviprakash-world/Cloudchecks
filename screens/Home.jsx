  import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Animated, Text, ActivityIndicator, ImageBackground  } from 'react-native';
import { Ionicons ,FontAwesome} from '@expo/vector-icons';
import WeatherInfo from '../components/WeatherInfo';
import UnitPicker from '../components/UnitPicker';
import WeatherDetails from '../components/WeatherDetails';
// import { currentWeather } from '../constants/Data';
import ReloadIcon from '../components/ReloadIcon';
import * as Location from 'expo-location';
import axios from 'axios';
import colors from '../constants/colors';


const BASE_WEATHER_URL = 'http://api.weatherapi.com/v1'
const WEATHER_API_KEY = ''
const DegreeText = ({val,size ,weight,color = "white",style}) =>{
<View style={[styles.degreeText,style]}>
<FontAwesome name="circle-o" size={size > 18 ? size / 4:8} color={color} className="text-2xl font-bold text-gray-800"/>
<Text style={{fontSize:size ,fontWeight:weight , color}}>{val}</Text>
</View>
}







const Home = () => {
  
  const screenWidth = Dimensions.get('window').width;

    const [unitsSystem, setUnitsSystem] = useState('m')
 const [currentWeather, setCurrentWeather] = useState(null)
   const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        load()
    }, [unitsSystem])

    async function load() {
       setCurrentWeather(null)
       
        setErrorMessage(null)
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMessage('Access to location is needed to run the app')
                return
            }
            const location = await Location.getCurrentPositionAsync()

            const { latitude, longitude } = location.coords

            console.log(location.coords);



               const weatherUrl = `${BASE_WEATHER_URL}/current.json?key=${WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=yes`
             console.log(weatherUrl);
             
             

            const response = await fetch(weatherUrl)


            const result = await response.json()

            
            // console.log(result);

            if (response.ok) {
                setCurrentWeather(result)
            } else {
                setErrorMessage(result.message)
            }
       
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

 if (currentWeather) {
  return (
  

<View style={styles.container}>
                {/* <StatusBar style="auto" /> */}
                <View style={styles.main}>
                    <UnitPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
                    <ReloadIcon load={load} />
                    <WeatherInfo currentWeather={currentWeather} unitsSystem={unitsSystem} />
                </View>
                <WeatherDetails currentWeather={currentWeather}  unitsSystem={unitsSystem} />
            </View>






  )}
  else {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
                {/* <StatusBar style="auto" /> */}
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//  container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff', // Set your desired background color
//     paddingHorizontal: 20, // Set horizontal padding
//     paddingVertical: 20, // Set vertical padding
//   },
// });
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    main: {
        justifyContent: 'center',
        flex: 1,
    },
    
})
export default Home