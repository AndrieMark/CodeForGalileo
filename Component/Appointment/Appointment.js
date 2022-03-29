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
  FlatList,
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

import {ListItem, SearchBar} from 'react-native-elements';

export default function Appointments({navigation}) {
  const [text2, settext] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../Resources/ICON/arrow.png')}
              style={styles.ImageBack}
              tintColor={'#367bda'}
            />
          </TouchableOpacity>

          <Image
            source={require('../Resources/logo2.png')}
            style={{height: 170, width: 170, top: 5, left: 60}}
          />
        </View>

        {/* <SearchBar
		placeholder="Search Here..."
		lightTheme
		round
   value={text2}
		// value={this.state.searchValue}
	 onChangeText={(text) => settext(text)}
		autoCorrect={false}
    
		/>     */}

        <View style={{flex: 1, height: 50, }}>
          <Text
            style={{
              color: '#367bda',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 20,
              letterSpacing: 2,
              fontWeight: 'bold',
              bottom: 10
            }}>
            Request an Appointment
          </Text>
        </View>

        <View style={{flex: 1, height: 50,  }}>
          <Text
            style={{
              color: '#494C4F',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 20,
              letterSpacing: 2,
              fontWeight: 'bold',
              bottom: 20
            }}>
           Doctor
          </Text>
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
