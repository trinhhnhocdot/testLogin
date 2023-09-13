import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Container/Login';
import Signin from '../Container/Signin';
import ForgotPass from '../Container/ForgotPass';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Intro from '../Container/intro';
import Home from '../Container/Home';

import navigationService from './navigationService';
import Account from '../Container/Account';



const Stack = createNativeStackNavigator();

const NavigationMain = () => {
  return (
    <NavigationContainer ref={navigationService.navigationRef}>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          animationTypeForReplace: 'push', 
        }}
      >
        
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPass" options={{ headerShown: false }} component={ForgotPass} />
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        {/* <Stack.Screen name="TestModal" component={TestModal} options={{headerShown:false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationMain

const styles = StyleSheet.create({})