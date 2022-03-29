/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import SplashScreen from './Component/SplashScreen/SplashScreen' 



import Landingpage from './Component/LandingPage/LandingPage';
import Login from './Component/Login/Login';
import RegistrationModal from './Component/Login/Registration';
import CustomDrawerContent from './Component/Dashboard/Dashboard';


// DASHBOARD EDIT
import UserProfile from './Component/userProfile/userprofile';
import EditProfile from './Component/userProfile/EditProfile'
import Appointments from './Component/Appointment/Appointment';


const Stack = createNativeStackNavigator();

  const NavOPtionHandler = () => ({
    headerShown: false
  });
  


  const MainStack = createNativeStackNavigator();



function Main() {
  return (
    <MainStack.Navigator initialRouteName="SplashScreen" >
      <MainStack.Screen name="SplashScreen" component={SplashScreen} options={NavOPtionHandler} />
      <MainStack.Screen name="Landingpage" component={Landingpage} options={NavOPtionHandler}/>
      <MainStack.Screen name="Login" component={Login} options={NavOPtionHandler}/>
      <MainStack.Screen name="RegistrationModal" component={RegistrationModal} options={NavOPtionHandler}/>
   
    </MainStack.Navigator>
  );
}



const EditDashboard = createNativeStackNavigator();

function UserProfileDash(){
  return(
      <EditDashboard.Navigator >
          <EditDashboard.Screen name='UserProfile' component={UserProfile} options={NavOPtionHandler}/>
      </EditDashboard.Navigator>
  )
}




const StackApp = createNativeStackNavigator();

export default function App() {

  return (
   
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Main" >
        <StackApp.Screen name="Main" component={Main} options={NavOPtionHandler} />
        <StackApp.Screen name="CustomDrawerContent" component={CustomDrawerContent} options={NavOPtionHandler} />
        <StackApp.Screen name='UserProfileDash' component={UserProfileDash} options={NavOPtionHandler}/>
        <StackApp.Screen name='EditProfile' component={EditProfile} options={NavOPtionHandler}/>
        <StackApp.Screen name="Appointments" component={Appointments} options={NavOPtionHandler}/>



      </StackApp.Navigator>
    </NavigationContainer>
  
  );
}




