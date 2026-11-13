// import React, { useEffect } from 'react'
// import { Alert } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import StackNavigator from './app/navigator/AppNavigator'
// // import {
// // listenTokenRefresh,
// // listenForegroundMessages,
// // } from './app/services/fcm'
// // Apni files ka sahi path dein
// // import apiResponseGenerator from './app/services/apiGenerator';
// // import ApiMethods from './app/constants/ApiMethods'

// // // Jis file mein save function hai wahan se import karein
// // import { save, load } from './app/utils/storage'
// // import ApiEndPoints from './app/constants/ApiEndPoints'

// export default function App() {
// // App khuli ho to notification par alert dikhana
// // useEffect(() => {
// // const unsubscribe = listenForegroundMessages((msg:any) => {
// // Alert.alert(
// // msg.notification?.title || 'Notification',
// // msg.notification?.body || ''
// // )
// // })
// // return unsubscribe
// // }, [])

// // Token badalne par backend ko naya token bhejna
// // useEffect(() => {
// // const unsubscribe = listenTokenRefresh(async (newToken:any) => {
// // // Login ke waqt save kiya hua auth token nikalna
// // const authToken = await load('authToken')
// // // User login nahi hai to kuch nahi karna
// // if (!authToken) return
// // await apiResponseGenerator({
// // method: ApiMethods.POST,
// // url: ApiEndPoints.UPDATE_FCM_TOKEN,
// // body: { fcmToken: newToken },
// // })
// // })
// // return unsubscribe
// // }, [])

// return (
// <NavigationContainer>
// <StackNavigator />
// </NavigationContainer>
// )
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './app/navigator/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}