import React , { useEffect, useState }from "react";
import {StyleSheet, Text, View, Animated,StatusBar, Image } from "react-native";
import logo from '../Resources/logo.png'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

export default class SplashScreen extends React.Component {


  constructor(props) {
    super(props);
    setTimeout(() => {
        this.props.navigation.navigate("Landingpage");
    }, 3000);
}



    state = {
        loadingProgress: new Animated.Value(0),
        animationDone : false
    }
  
        


    componentDidMount(){
        Animated.timing(this.state.loadingProgress,{
          toValue: 100,
          duration: 3000,
          useNativeDriver: true,
          delay: 400
        }).start (() =>{
          this.setState({animationDone: true});
            
        });
    }
  
    render(){
   
    
  
        const colorlayer = this.state.animationDone ? null : 
        <Image source={require('../Resources/SplashScreenLogo.jpg')} style={{width: "100%", height: "100%"}}
        resizeMode='stretch'/>
  
        // const whitelayer = this.state.animationDone ? null : 
        // <View style={[StyleSheet.absoluteFill,{backgroundColor: "#fff"}]}></View>
  
      const imageScale = {
         transform: [{
          scale: this.state.loadingProgress.interpolate(
            {
              inputRange: [10, 15, 120],
              outputRange: [0.1, 0.06, 100]
            })
          }
         ]
      };
  
  
      const opacity = {
        opacity: this.state.loadingProgress.interpolate({
          inputRange: [0, 15, 120],
          outputRange: [0, 0, 1],
          extrapolate: "clamp"
        })
      }
  
      return (
          <View style={{flex: 1}}>
            <StatusBar barStyle="dark-content" backgroundColor={'white'}  />
      {colorlayer}
            <View style={styles.Contain}>
                  <Animated.Image source={logo} style={[{width: 1000, marginBottom: 780}, imageScale]}
                    resizeMode="contain"
                  ></Animated.Image>
          </View>
          </View>
      );
    }
  }
  
  
  const styles = StyleSheet.create({
      Contain:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
  });