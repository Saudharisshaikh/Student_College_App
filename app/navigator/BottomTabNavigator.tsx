import React from 'react';
import {Image} from 'react-native';
import {BottomTabParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import NoticeScreen from '../screens/NoticeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Images from '../constants/Images';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const renderTabIcon = (source: number, color: string, size: number) => (
  <Image
    source={source}
    style={{
      width: size,
      height: size,
      tintColor: color,
    }}
    resizeMode="contain"
  />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY_COLOR,
        tabBarInactiveTintColor: '#8A8A8A',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => renderTabIcon(Images.Home, color, size),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color, size}) => renderTabIcon(Images.Chat, color, size),
        }}
      />
      <Tab.Screen
        name="Notice"
        component={NoticeScreen}
        options={{
          tabBarIcon: ({color, size}) => renderTabIcon(Images.Notice, color, size),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => renderTabIcon(Images.User, color, size),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;