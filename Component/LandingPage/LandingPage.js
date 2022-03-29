import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import RegistrationModal from '../Login/Registration';

import {useIsFocused} from '@react-navigation/native';

import {
  Divider,
  Heading,
  Box,
  Icon,
  Center,
  NativeBaseProvider,
} from 'native-base';

import Swiper from 'react-native-swiper';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default function Landingpage({navigation, route}) {

  const [showModal, SetShowModal] = useState(false)
  const togglemodal = () => {

    SetShowModal(!showModal)

}



  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />

      <Swiper

        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 50,
          borderWidth: 3,
          borderColor: 'black',
          marginLeft: 10,
          marginRight: 10,
        }}
        activeDotStyle={{
          width: 20,
          height: 20,
          borderRadius: 50,
          backgroundColor: 'white',
          marginLeft: 10,
          marginRight: 10,
          borderWidth: 3,
          borderColor: 'black',
        }}
        autoplay={true}
        >
          
        <View style={styles.slide1}>
          <Image
            source={require('../Resources/LandingPage/Landingpagemobileapp.jpg')}
            resizeMode="stretch"
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={require('../Resources/LandingPage/Landingpage2.jpg')}
            resizeMode="stretch"
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.slide3}>
          <Image
             source={require('../Resources/LandingPage/Landingpage3.jpg')}
            resizeMode="stretch"
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </Swiper>
      <View style={{position: 'absolute', alignSelf: 'flex-end'}}>
        <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.registration}
            onPress={() => {togglemodal()}}
         >
          <Text style={styles.textregis}>Register</Text>
        </TouchableOpacity>

        <NativeBaseProvider>
                 <RegistrationModal 
                showModal={showModal}
               SetShowModal={SetShowModal}
               ></RegistrationModal>
           </NativeBaseProvider>
      </View>

          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registration: {
    borderColor: 'white',
    borderWidth: 2,
    height: 40,
    width: 150,
    marginTop: 25,
    marginRight: 15,
    justifyContent: 'center',
    borderRadius: 50,
  },
  textregis: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  wrapper: {
    flex: 1
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
