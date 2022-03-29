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

export default function UserProfile({navigation}) {
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
              User Profile
            </Text>
          </TouchableOpacity>
        </View>


        {/* PROFILE LOGO */}

        <View
          style={{
            flex: 1,
            height: 270,
            justifyContent: 'center',
          }}>
          <View style={{alignSelf: 'center'}}>
            <Image
              source={require('../Resources/profile.png')}
              style={styles.ProfileImage}
            />
            <Text
              style={{
                color: '#367bda',
                fontWeight: 'bold',
                fontSize: 20,
                top: 10,
              }}>
              Maria Juana Perez
            </Text>
          </View>
        </View>

        {/* LOCATION */}

        <View
          style={{
            flex: 1,
            height: 70,
            flexDirection: 'row',
            justifyContent: 'center',
            right: 18,
          }}>
          <Image
            source={require('../Resources/ICON/address.png')}
            style={{width: 50, height: 50, right: 50}}
          />
          <Text
            style={{
              color: '#757575',
              fontWeight: 'bold',
              fontSize: 15,
              top: 15,
              right: 15,
            }}>
            Manila City
          </Text>
        </View>

        {/* EMAIL */}

        <View
          style={{
            flex: 1,
            height: 70,
            flexDirection: 'row',
            justifyContent: 'center',
            top: 5,
            left: 25,
          }}>
          <Image
            source={require('../Resources/ICON/emailuser.png')}
            style={{width: 40, height: 40, right: 50}}
          />
          <Text
            style={{
              color: '#757575',
              fontWeight: 'bold',
              fontSize: 15,
              top: 15,
              right: 10,
            }}>
            mariajuana@gmail.com
          </Text>
        </View>

        {/* Telephone */}

        <View
          style={{
            flex: 1,
            height: 70,
            flexDirection: 'row',
            justifyContent: 'center',
            top: 10,
            right: 10,
          }}>
          <Image
            source={require('../Resources/ICON/contact.png')}
            style={{width: 40, height: 40, right: 50}}
          />
          <Text
            style={{
              color: '#757575',
              fontWeight: 'bold',
              fontSize: 15,
              top: 15,
              right: 10,
            }}>
            09123456789
          </Text>
        </View>

        {/* Birthday */}

        <View
          style={{
            flex: 1,
            height: 70,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
            right: 10,
          }}>
          <Image
            source={require('../Resources/ICON/birthday.png')}
            style={{width: 40, height: 40, right: 50}}
          />
          <Text
            style={{
              color: '#757575',
              fontWeight: 'bold',
              fontSize: 15,
              top: 15,
              right: 1,
            }}>
           February 2, 1998
          </Text>
        </View>

        <View style={{flex: 1, height: 94,  justifyContent: 'center',}}>
          <TouchableOpacity style={styles.buttonCustom}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 20,
                letterSpacing: 2
              }}
              >
              EDIT
            </Text>
          </TouchableOpacity>
        </View>

        
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

});
