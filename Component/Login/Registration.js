import React from 'react';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  safeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Button,
  Modal,
  Center,
  NativeBaseProvider,
  Input,
  VStack,
  FormControl,
} from 'native-base';

import {useNavigation} from '@react-navigation/native';

export default function Registration(props) {
  const navigation = useNavigation();


  return (
    <>
      <Modal
        isOpen={props.showModal}
        onClose={() => props.SetShowModal(false)}
        avoidKeyboard
        height={700}>
        <Modal.Content style={{width: 300}}>
          <Modal.Body>
            <View style={styles.container}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => props.SetShowModal(false)}
                >
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      alignSelf: 'flex-end',
                      marginTop: 10,
                      marginRight: 5,
                    }}
                    source={require('../Resources/ICON/close.png')}
                    tintColor={'#367bda'}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, justifyContent: 'center', height: 120}}>
                <Image
                  source={require('../Resources/logo2.png')}
                  style={{
                    width: 170,
                    height: 150,
                    alignSelf: 'center',
                    marginTop: 5,
                  }}
                />
              </View>
              <FormControl avoidKeyboard>
                {/* NAME */}

                <View style={{flex: 1, marginTop: 5}}>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={{
                        flex: 1,
                        fontSize: 15,
                        color: 'black',
                        paddingLeft: -10,
                        marginTop: 5,
                      }}
                      placeholder="Name"
                      returnKeyType={'next'}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="black"
                    />
                  </View>
                </View>

                {/* ADDRESS */}

                <View style={{flex: 1}}>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={{
                        flex: 1,
                        fontSize: 15,
                        color: 'black',
                        paddingLeft: -10,
                        marginTop: 5,
                      }}
                      placeholder="Address"
                      returnKeyType={'next'}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="black"
                    />
                  </View>
                </View>

                {/* EMAIL */}

                <View style={{flex: 1}}>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={{
                        flex: 1,
                        fontSize: 15,
                        color: 'black',
                        paddingLeft: -10,
                        marginTop: 5,
                      }}
                      placeholder="Email"
                      returnKeyType={'next'}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="black"
                    />
                  </View>
                </View>

                {/* CONTACT */}

                <View style={{flex: 1}}>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={{
                        flex: 1,
                        fontSize: 15,
                        color: 'black',
                        paddingLeft: -10,
                        marginTop: 5,
                      }}
                      placeholder="Contact Address"
                      returnKeyType={'next'}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="black"
                    />
                  </View>
                </View>

                {/* BIRTHDAY */}

                <View style={{flex: 1}}>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={{
                        flex: 1,
                        fontSize: 15,
                        color: 'black',
                        paddingLeft: -10,
                        marginTop: 5,
                      }}
                      placeholder="Birthday"
                      returnKeyType={'next'}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="black"
                    />
                  </View>
                </View>

                {/* DATE LAST VISITED */}

                <View style={{flex: 1}}>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={{
                        flex: 1,
                        fontSize: 15,
                        color: 'black',
                        paddingLeft: -10,
                        marginTop: 5,
                      }}
                      placeholder="Date Last Visited"
                      returnKeyType={'next'}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="black"
                    />
                    <TouchableOpacity>
                      <Image
                        source={require('../Resources/ICON/calendar.png')} //Change your icon image here
                        style={styles.ImageStyle}
                        tintColor={'black'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* DOCTOR */}

                <View style={{flex: 1}}>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={{
                        flex: 1,
                        fontSize: 15,
                        color: 'black',
                        paddingLeft: -10,
                        marginTop: 5,
                      }}
                      placeholder="Doctor"
                      returnKeyType={'next'}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="black"
                    />
                  </View>
                </View>
              </FormControl>
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
                  marginTop: -20,
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('CustomDrawerContent')}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  FINISH
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{color: 'black'}}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={{color: 'blue', paddingLeft: 5}}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    width: 275,
    height: 60,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderColor: '#D3D3D3',
    borderBottomWidth: 2,
    borderRadius: 5,
  },
  ImageStyle: {
    padding: 15,
    marginTop: 15,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  },
});
