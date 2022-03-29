import React, {Component} from 'react';
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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
// import { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './styles';
import logo from '../Resources/logo.png';

import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default function EditProfile({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', marginTop: 20}}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../Resources/ICON/arrow.png')}
              style={styles.ImageBack}
              tintColor={'#367bda'}
            />
            <Text
              style={{
                color: '#367bda',
                left: 35,
                fontWeight: 'bold',
                fontSize: 20,
                top: 7.5,
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, height: 200, justifyContent: 'center'}}>
          <Image
            source={require('../Resources/ICON/profileupload.png')}
            style={{width: 160, height: 160, alignSelf: 'center'}}
          />
        </View>

        {/* NAME */}

        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: 'black',
                left: 35,
                fontWeight: 'bold',
                fontSize: 20,
                top: 10,
                left: 30,
              }}>
              Name
            </Text>
          </View>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../Resources/ICON/name.png')} //Change your icon image here
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
              returnKeyType={'next'}
              underlineColorAndroid="transparent"
              placeholderTextColor="black"
            />
          </View>
        </View>

        {/* ADDRESS */}

        <View style={{flex: 1, top: 15}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: 'black',
                left: 35,
                fontWeight: 'bold',
                fontSize: 20,
                top: 10,
                left: 30,
              }}>
              Address
            </Text>
          </View>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../Resources/ICON/address.png')} //Change your icon image here
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
              returnKeyType={'next'}
              underlineColorAndroid="transparent"
              placeholderTextColor="black"
            />
          </View>
        </View>

        {/* EMAIL */}

        <View style={{flex: 1, top: 20}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: 'black',
                left: 35,
                fontWeight: 'bold',
                fontSize: 20,
                top: 10,
                left: 30,
              }}>
              Email
            </Text>
          </View>
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
              returnKeyType={'next'}
              underlineColorAndroid="transparent"
              placeholderTextColor="black"
            />
          </View>
        </View>

        {/* CONTACT */}

        <View style={{flex: 1, top: 25}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: 'black',
                left: 35,
                fontWeight: 'bold',
                fontSize: 20,
                top: 10,
                left: 30,
              }}>
              Contact
            </Text>
          </View>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../Resources/ICON/contact.png')} //Change your icon image here
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
              returnKeyType={'next'}
              underlineColorAndroid="transparent"
              placeholderTextColor="black"
            />
          </View>
        </View>

        {/* BIRTHDAY */}

        <View style={{flex: 1, top: 30}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: 'black',
                left: 35,
                fontWeight: 'bold',
                fontSize: 20,
                top: 10,
                left: 30,
              }}>
              Birthday
            </Text>
          </View>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../Resources/ICON/birthday.png')} //Change your icon image here
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
              returnKeyType={'next'}
              underlineColorAndroid="transparent"
              placeholderTextColor="black"
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            height: 150,
          justifyContent: 'center',
            top: 60,
          }}>
          <TouchableOpacity style={styles.buttonCustom}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 20,
                letterSpacing: 2,
              }}>
              SAVE
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            height: 50,
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ImageBack: {
    height: 40,
    width: 40,
    left: 20,
  },
  ProfileImage: {
    height: 170,
    width: 170,
    borderRadius: 50,
  },

  //EMAIL

  SectionStyle: {
    flexDirection: 'row',
    width: 300,
    height: 60,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderColor: 'black',
    borderBottomWidth: 2,
    borderRadius: 5,
    alignSelf: 'center',
  },
  ImageStyle: {
    padding: 15,
    marginTop: 15,
    height: 35,
    width: 35,
    resizeMode: 'stretch',
  },
  buttonCustom: {
    backgroundColor: '#367BDA',
    width: 220,
    height: 60,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    bottom: 10
  },
});
