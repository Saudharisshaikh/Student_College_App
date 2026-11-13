import { View, Text, StyleSheet, Image, ScrollView, Pressable, Platform, ActivityIndicator } from 'react-native'
import React from 'react'
import Fonts from '../constants/Fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Images from '../constants/Images';

import { useForm,  Controller } from 'react-hook-form';
import { loginValidationSchema } from '../validations/login';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomTextInput } from '../components/CustomTextInput';
import CustomButton from '../components/CommonButton';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native'
// import { getFcmToken } from '../services/fcm';
import apiResponseGenerator from '../services/apiGenerator';
import ApiMethods from '../constants/ApiMethods';
import ApiEndPoints from '../constants/ApiEndPoints';
import KeyConstants from '../constants/KeyConstants';
import { save } from '../utils/storage';
import { load } from '../utils/storage';

const LoginScreen = () => {

 const {control, handleSubmit,formState:{errors}} = useForm({
  resolver:yupResolver(loginValidationSchema)
 })
 const[loading,setLoading] = React.useState(false)

//  const handleLogin = async(data:any)=>{
//   console.log('Login data:', data);
//   navigation.navigate('BottomTab');
//  }


const handleLogin = async (data: any) => {
if (loading) return
// Pehle device ka FCM token lein
// const fcmToken = await getFcmToken()
const fcmToken = "test_fcm_token_1234567890abcdef"
 const payload = {
            email: data.email,
            password: data.password,
            fcmToken: fcmToken, // FCM token ko payload mein bhejein
            platform: Platform.OS, // Platform ko bhi payload mein bhejein
        }
  
try {
// Email, password aur token ek saath login API ko bhejein
// const response = await loginApi(data.email, data.password, fcmToken)
setLoading(true)
const response = await apiResponseGenerator({
    method: ApiMethods.POST,
    url: ApiEndPoints.LOGIN,
    body: payload
})

// Apni API ke response ke mutabiq success check karein
if (response) {
setLoading(false)
    await save(KeyConstants.AUTH_TOKEN, response.token);
  console.log('Login response:', response)
 console.log('Token saved:', response.token)
   await save(KeyConstants.USER_DATA, response.user);
   const userData = await load(KeyConstants.USER_DATA);
   console.log('User data saved:', userData)

  Alert.alert('Login Success',response.message)
navigation.navigate('BottomTab')
} else {
  setLoading(false)
Alert.alert('Login failed', response.message || 'Try again')
}
} catch (error: any) {
setLoading(false)
Alert.alert('Login error', error.message)
}
}


 const navigation: any = useNavigation();


  return (
    <View style={styles.container}>
       <ScrollView style={styles.scrollView}>
     
     
      <View style={styles.overlay}>

        <Image source={Images.GraduateStudents}
          style={{
            width: responsiveWidth(30), height: responsiveHeight(15)
            , justifyContent: 'center', alignSelf: 'center', marginTop: responsiveHeight(5)

          }}
          resizeMode="cover"

        />
        <Text style={styles.loginText}>Welcome Back</Text>
      </View>



     <View style={styles.textInputViewStyle}>

      <Text style={styles.emailTextStyle}>Email</Text>

      <Controller
       control = {control}
       render={({field:{onChange,onBlur,value}})=>{
        return(
          <CustomTextInput
           value={value}
           onChangeText={onChange}
           placeholder='Enter your email'
           icon= {Images.EmailIcon}
           errorMessage={errors.email?.message}
          
          />
        )
       }}
       name='email'
       />     

       <Text style={styles.emailTextStyle}>Password</Text>

       <Controller 
     control={control}
     render={({field:{onChange,onBlur,value}})=>{
      return(
        <CustomTextInput
         value={value}
         onChangeText={onChange}
         placeholder='Enter your password'
         icon= {Images.PasswordIcon}
         errorMessage={errors.password?.message}
         isPassword={true}
        />
      )
     }}
     name='password'       
       />

</View>

 <View style={styles.forgetPasswordTextStyle}>
  <Text>Forgot Password?</Text>
 </View>

   
   <CustomButton
   title = 'Login'
    margintop={responsiveHeight(5)}
    onPress= {handleSubmit(handleLogin)}
    />

    <View style={styles.signupViewStyle}>
      <Text>Don't have an account? </Text>
      <Pressable onPress={() => {
        navigation.navigate('Signup');
      }}><Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>
    </View>

     
    </ScrollView>

    {loading && (
      <View style={styles.loaderOverlay}>
                        <ActivityIndicator size='large' color={Colors.PRIMARY_COLOR} />
                    </View>
                )}

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#E7E9FF',
    marginBottom: 20,
    alignSelf: 'center',

  },
loaderOverlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },

  emailTextStyle:{
    fontFamily:Fonts.POPPINS_REGULAR,
    fontSize: 14,
    
    marginStart:responsiveWidth(7),
  },
  textInputViewStyle:{
   marginTop:responsiveHeight(5)
  },
  signupViewStyle:{
    flexDirection:'row',
    justifyContent:'center',
   marginTop:responsiveHeight(2),
  },
  signUpText:{
    fontFamily:Fonts.POPPINS_BOLD,
    fontWeight:'bold',
    fontSize: 14,
  },

  forgetPasswordTextStyle:{
   flexDirection:'row',
   marginEnd:responsiveWidth(5),
   fontFamily:Fonts.POPPINS_BOLD,
   fontWeight:'bold',
   fontSize: 18,
   alignSelf:'flex-end',
  },
 scrollView:{
   flex:1,
   backgroundColor:Colors.WHITE_COLOR,
 },
  overlay: {
    height: responsiveHeight(35),
    width: responsiveWidth(100),
    //backgroundColor: 'rgba(0, 33, 71, 0.80)',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
});

