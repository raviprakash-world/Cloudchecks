import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';





const OnboardingScreen = () => {
    const navigation = useNavigation();

   
   
  return (

<Onboarding 

onSkip={() => navigation.replace("Home")}
onDone={()=>navigation.replace("Home")}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={{uri:"https://as1.ftcdn.net/v2/jpg/04/60/95/58/1000_F_460955829_DSUiSeVXyFHMkWprBe7ZRM1C8uJG5FgX.jpg"}} style={{ width: 73, height: 222, resizeMode: 'cover' }}/>,
      title: 'Weather app',
      subtitle: 'screen 1',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={{uri:"https://as1.ftcdn.net/v2/jpg/04/60/95/58/1000_F_460955829_DSUiSeVXyFHMkWprBe7ZRM1C8uJG5FgX.jpg"}} style={{ width: 73, height: 222, resizeMode: 'cover' }}/>,
      title: 'Weather app',
      subtitle: 'screen 2',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={{uri:"https://as1.ftcdn.net/v2/jpg/04/60/95/58/1000_F_460955829_DSUiSeVXyFHMkWprBe7ZRM1C8uJG5FgX.jpg"}} style={{ width: 73, height: 222, resizeMode: 'cover' }}/>,
      title: 'Weather app',
      subtitle: 'screen 3',
    }
    
   
    
  ]}
/>


  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 50,
  },
});


export default OnboardingScreen