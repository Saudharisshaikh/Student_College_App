import { Platform } from 'react-native';

export const BASE_URL = Platform.select({
    android: 'http://10.0.2.2:3000/api/',
    ios: 'http://127.0.0.1:3000/api/',
    default: 'http://10.0.2.2:3000/api/',
});