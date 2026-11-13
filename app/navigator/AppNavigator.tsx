import * as React from 'react';
// import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';



import WelcomeScreen from '../screens/WelcomeScreen';
import {StackParamList} from './types';

import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import BottomTabNavigator from './BottomTabNavigator';



const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name={'Welcome'}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'OnBoarding'}
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen 
      name={'Login'}
      component={LoginScreen}
      options={{headerShown: false}}
      />

      <Stack.Screen
      name={'Signup'}
      component={SignupScreen}
      options={{headerShown: false}}
      />

      <Stack.Screen
      name={'BottomTab'}
      component={BottomTabNavigator}
      options={{headerShown:false}}
/>

    
    </Stack.Navigator>
  );
};

export default StackNavigator;
