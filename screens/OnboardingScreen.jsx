import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';


const CustomOnboardingPage = ({ title, subtitle, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};



const OnboardingScreen = () => {
    const navigation = useNavigation();

   const pages = [
    {
      title: 'Welcome to MyApp',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      backgroundColor: '#fff',
      component: <CustomOnboardingPage />,
    },
    // add more custom pages here
  ];
  return (

<Onboarding
pages={pages}

onDone={()=>navigation.replace("Home")}
//   pages={[
//     {
//       backgroundColor: '#fff',
//       image: <Image source={{uri:"https://www.mindinventory.com/blog/wp-content/uploads/2022/10/Login-Screen-Design.png"}} className="w-73 h-72 object-contain"/>,
//       title: 'Onboarding',
//       subtitle: 'Done with React Native Onboarding Swiper',
//     },
//     {
//       backgroundColor: '#fff',
//       image: <Image source={{uri:"https://www.mindinventory.com/blog/wp-content/uploads/2022/10/Login-Screen-Design.png"}} className="w-73 h-72 object-contain"/>,
//       title: 'Onboarding',
//       subtitle: 'Done with React Native Onboarding Swiper',
//     },
//     {
//       backgroundColor: '#fff',
//       image: <Image source={{uri:"https://www.mindinventory.com/blog/wp-content/uploads/2022/10/Login-Screen-Design.png"}} className="w-73 h-72 object-contain"/>,
//       title: 'Onboarding',
//       subtitle: 'Done with React Native Onboarding Swiper',
//     }
   
    
//   ]}
></Onboarding>


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