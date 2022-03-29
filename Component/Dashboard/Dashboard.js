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



export default function CustomDrawerContent({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{flex: 1, height: 330}}>
          <Image
            source={require('../Resources/Rounded.png')}
            style={{height: 380, width: 420, marginTop: -120, marginLeft: -27}}
          />

          {/* SIGN OUT AND PROFILE EDIT */}
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, marginTop: -220}}>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Image
                  source={require('../Resources/ICON/log-out.png')}
                  style={{width: 30, height: 30, marginLeft: 20}}
                  tintColor={'white'}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginTop: 4,
                  }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, marginTop: -220}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 25,
                }}
                onPress={() => navigation.navigate('EditProfile')}
                >
                <Image
                  source={require('../Resources/ICON/account.png')}
                  style={{width: 30, height: 30}}
                  tintColor={'white'}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginTop: 4,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* LOGO */}
          <View style={{flex: 1, marginTop: -410}}>
            <Image
              source={require('../Resources/logo.png')}
              style={{width: 110, height: 100, marginLeft: 20}}
              tintColor={'white'}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            height: 40,
            marginTop: -40,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#367bda',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
              marginTop: -35,
            }}>
            Dashboard
          </Text>
        </View>

        {/* LANE ONE */}
        <View
          style={{
            flex: 1,
            height: 130,
            flexDirection: 'row',
          }}>
          {/* USER PROFILE */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderColor: '#367bda',
                borderWidth: 3.5,
                height: 75,
                width: 80,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginRight: 10,
                marginTop: -40,
              }}
              onPress={() => navigation.navigate('UserProfileDash')}
              >
              <Image
                source={require('../Resources/ICON/account.png')}
                style={{width: 50, height: 50, alignSelf: 'center'}}
                tintColor={'#367bda'}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#367bda',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: 10,
                top: 5,
              }}>
              User Profile
            </Text>
          </View>

          {/* ABOUT GALILEO */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderColor: '#367bda',
                borderWidth: 3.5,
                height: 75,
                width: 80,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginRight: 15,
                marginTop: -40,
              }}
              // onPress={() => navigation.navigate('AboutGalileo')}
              >
              <Image
                source={require('../Resources/ICON/information.png')}
                style={{width: 50, height: 50, alignSelf: 'center'}}
                tintColor={'#367bda'}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#367bda',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: 15,
                top: 5,
              }}>
              About Galileo
            </Text>
          </View>

          {/* APPOINTMENT*/}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Appointments')}
              style={{
                borderColor: '#367bda',
                borderWidth: 3.5,
                height: 75,
                width: 80,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginRight: 15,
                marginTop: -40,
              }}>
              <Image
                source={require('../Resources/ICON/appointment.png')}
                style={{width: 50, height: 50, alignSelf: 'center'}}
                tintColor={'#367bda'}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#367bda',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: 15,
                top: 5,
              }}>
              Appointments
            </Text>
          </View>
        </View>

        {/* SECOND ONE */}
        <View
          style={{
            flex: 1,
            height: 130,
            flexDirection: 'row',
          }}>
          {/* MEDICAL CERTIFICATES */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderColor: '#367bda',
                borderWidth: 3.5,
                height: 75,
                width: 80,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginRight: 10,
                marginTop: -45,
              }}>
              <Image
                source={require('../Resources/ICON/medical-certificate.png')}
                style={{width: 50, height: 50, alignSelf: 'center'}}
                tintColor={'#367bda'}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#367bda',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: 10,
                top: 5,
              }}>
              Medical Certificates
            </Text>
          </View>

          {/* PRESCRIPTION */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderColor: '#367bda',
                borderWidth: 3.5,
                height: 75,
                width: 80,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginRight: 15,
                marginTop: -59,
              }}>
              <View
                style={{
                  backgroundColor: '#367bda',
                  width: 50,
                  height: 40,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../Resources/ICON/prescription.png')}
                  style={{width: 27, height: 30, alignSelf: 'center'}}
                  tintColor={'white'}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#367bda',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: 15,
                top: 5,
              }}>
              Prescription
            </Text>
          </View>

          {/* PURCHASES*/}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderColor: '#367bda',
                borderWidth: 3.5,
                height: 75,
                width: 80,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginRight: 15,
                marginTop: -59,
              }}>
              <Image
                source={require('../Resources/ICON/price-tag.png')}
                style={{width: 50, height: 50, alignSelf: 'center'}}
                tintColor={'#367bda'}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#367bda',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: 15,
                top: 5
              }}>
              Purchases
            </Text>
          </View>
        </View>

        {/* THIRD ONE */}
        <View
          style={{
            flex: 1,
            height: 130,
            flexDirection: 'row',
          }}>
          {/* NOTIFACTIONS */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderColor: '#367bda',
                borderWidth: 3.5,
                height: 75,
                width: 80,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginRight: 10,
                marginTop: -59,
              }}>
              <Image
                source={require('../Resources/ICON/notification.png')}
                style={{width: 50, height: 50, alignSelf: 'center'}}
                tintColor={'#367bda'}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#367bda',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: 10,
                top: 5
              }}>
              Notifications
            </Text>
          </View>

          {/* VIRTUAL CONSULTATION */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderColor: '#367bda',
                borderWidth: 3.5,
                height: 75,
                width: 80,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginRight: 15,
                marginTop: -45,
              }}>
              <Image
                source={require('../Resources/ICON/Virtual-Consultation.png')}
                style={{width: 45, height: 45, alignSelf: 'center'}}
                tintColor={'#367bda'}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#367bda',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: 15,
                top: 5
              }}>
              Virtual Consultation
            </Text>
          </View>

          {/* FEEDBACKS*/}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderColor: '#367bda',
                borderWidth: 3.5,
                height: 75,
                width: 80,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginRight: 15,
                marginTop: -59,
              }}>
              <Image
                source={require('../Resources/ICON/feedback.png')}
                style={{width: 50, height: 50, alignSelf: 'center',}}
                tintColor={'#367bda'}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#367bda',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: 15,
                top: 5
              }}>
              Feedbacks
            </Text>
          </View>
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
