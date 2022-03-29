import React, {Component, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './styles';
import logo from '../Resources/logo.png';

import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RegistrationModal from '../Login/Registration';


import {
  Divider,
  Heading,
  Box,

  Center,
  NativeBaseProvider,
} from 'native-base';


function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default function Login({navigation}) {

  const [showModal, SetShowModal] = useState(false)

  const togglemodal = () => {

    SetShowModal(!showModal)

}




  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{flex: 1, height: 300, justifyContent: 'center'}}>
          <Image
            source={require('../Resources/CropLogo.jpg')}
            style={{width: 270, height: 175, alignSelf: 'center'}}></Image>
        </View>

        {/* EMAIL */}

        <View style={{flex: 1}}>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../Resources/ICON/email.png')} //Change your icon image here
              style={styles.ImageStyle}
              tintColor={'black'}
            />
            <TextInput
              style={{
                flex: 1,
                fontSize: 15,
                color: 'black',
                paddingLeft: 20,
                marginTop: 5,
              }}
              placeholder="Email"
              returnKeyType={'next'}
              underlineColorAndroid="transparent"
              placeholderTextColor="black"
            />
          </View>
        </View>

        {/* PASSWORD */}

        <View style={{flex: 1, marginTop: 25}}>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../Resources/ICON/padlock.png')} //Change your icon image here
              style={styles.ImageStyle}
              tintColor={'black'}
            />
            <TextInput
              style={{
                flex: 1,
                fontSize: 15,
                color: 'black',
                paddingLeft: 20,
                marginTop: 5,
              }}
              placeholder="Password"
              returnKeyType={'next'}
              underlineColorAndroid="transparent"
              placeholderTextColor="black"
              secureTextEntry
            />

            <TouchableOpacity>
              <Image
                source={require('../Resources/ICON/visibilityOpen.png')} //Change your icon image here
                style={styles.ImageStyle}
                tintColor={'black'}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginTop: 30,
            height: 50,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: 'black', alignSelf: 'center', fontSize: 16}}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => {togglemodal()}}
          >
              <Text
              style={{
                color: 'black',
                alignSelf: 'center',
                paddingLeft: 5,
                color: 'blue',
                fontSize: 16,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            height: 120,
            marginTop: 25,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#367BDA',
              width: 220,
              height: 60,
              alignSelf: 'center',
              borderRadius: 10,
              justifyContent: 'center',
            }}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('CustomDrawerContent')}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View>
        
        <NativeBaseProvider>
                 <RegistrationModal 
                showModal={showModal}
               SetShowModal={SetShowModal}
               ></RegistrationModal>
           </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  SectionStyle: {
    flexDirection: 'row',
    width: 300,
    height: 60,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderColor: '#D3D3D3',
    borderBottomWidth: 2,
    borderRadius: 5,
    alignSelf: 'center',
  },
  ImageStyle: {
    padding: 15,
    marginTop: 15,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  },
});
