// import messaging from '@react-native-firebase/messaging'
// import { PermissionsAndroid, Platform } from 'react-native'

// // Android 13 aur upar par notification permission maangna
// export const requestPermission = async () => {
// if (Platform.Version >= 33) {
// const result = await PermissionsAndroid.request(
// PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
// )
// return result === PermissionsAndroid.RESULTS.GRANTED
// }
// // Android 12 aur neeche permission ki zaroorat nahi
// return true
// }

// // Device ka FCM token lena
// export const getFcmToken = async () => {
// const allowed = await requestPermission()
// if (!allowed) return null
// return await messaging().getToken()
// }

// // Token badalne par naya token milna
// export const listenTokenRefresh = (onNewToken) => {
// return messaging().onTokenRefresh(onNewToken)
// }

// // App khuli ho to notification sunna
// export const listenForegroundMessages = (onMessage) => {
// return messaging().onMessage(onMessage)
// }

// // Logout par token hatana
// export const deleteFcmToken = async () => {
// await messaging().deleteToken()
// }


// Zaroori imports

import messaging from '@react-native-firebase/messaging'
import { PermissionsAndroid, Platform } from 'react-native'

// Notification permission maangna
// export const requestPermission = async () => {
// // Android 13 aur upar ke liye runtime permission
// if (Platform.OS === 'android' && Platform.Version >= 33) {
// const result = await PermissionsAndroid.request(
// PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
// )
// return result === PermissionsAndroid.RESULTS.GRANTED
// }
// // iOS aur purane Android ke liye
// const status = await messaging().requestPermission()
// return (
// status === messaging.AuthorizationStatus.AUTHORIZED ||
// status === messaging.AuthorizationStatus.PROVISIONAL
// )
// }


export const requestPermission = async () => {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 33) {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );

      return result === PermissionsAndroid.RESULTS.GRANTED;
    }

    return true;
  }

  const status = await messaging().requestPermission();

  return (
    status === messaging.AuthorizationStatus.AUTHORIZED ||
    status === messaging.AuthorizationStatus.PROVISIONAL
  );
};



// Device ka FCM token lena
export const getFcmToken = async () => {
const allowed = await requestPermission()
if (!allowed) return null
// iOS par pehle device register karna zaroori hai
if (Platform.OS === 'ios') {
await messaging().registerDeviceForRemoteMessages()
}
return await messaging().getToken()
}

// // Token badalne par naya token milna
// export const listenTokenRefresh = (onNewToken) => {
// return messaging().onTokenRefresh(onNewToken)
// }

// // App khuli ho to aane wali notification sunna
// export const listenForegroundMessages = (onMessage) => {
// return messaging().onMessage(onMessage)
// }

// // Logout par purana token hatana
// export const deleteFcmToken = async () => {
// await messaging().deleteToken()
// }