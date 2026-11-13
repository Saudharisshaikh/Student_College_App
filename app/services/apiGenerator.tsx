
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import { BASE_URL } from '../config/apiConfig';

//const BASE_URL = "http://127.0.0.1:3000/api/"
const BASE_URL = "http://localhost:3000/api/";

const getAuthToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('authToken');
    if (jsonValue) {
      return jsonValue;
    }
    return null;
  } catch (error) {
    console.error('Error fetching token:', error);
    return null;
  }
};
const apiResponseGenerator = async ({method, url, body}: any) => {
    const authToken = await getAuthToken();
    const axiosConfig = {
      method: method ? method.toLowerCase() : 'get',
      url: `${BASE_URL}${url}`,
      data: body,
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : undefined,
      },
    };
    try {
      const response = await axios(axiosConfig);
      return response.data;
    }

     catch (error: any) {
    console.log('API Error:', error);
    console.log('Backend Response:', error?.response?.data);
    console.log('HTTP Status:', error?.response?.status);
    console.log('Request URL:', error?.config?.url);

    const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.meta?.message ||
        error?.message ||
        'Unknown error occurred';

    throw new Error(errorMessage);
}
    
  };
  
  export default apiResponseGenerator;
  
