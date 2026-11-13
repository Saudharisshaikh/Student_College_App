import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import RetailProCard from '../components/RetailProCard'
import TopBar from '../components/TopBar'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupValidationSchema } from '../validations/signup'
import { useNavigation } from '@react-navigation/core'
import Fonts from '../constants/Fonts'
import { CustomTextInput } from '../components/CustomTextInput'
import Images from '../constants/Images'
import CustomButton from '../components/CommonButton'
import { profileValidationSchema } from '../validations/profile'

const ProfileScreen = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(profileValidationSchema),defaultValues: {
name: 'Saud',
email: 'saudharisshaikh@gmail.com',
rollNumber: '103',
phone: '03083456564',
},
  })
  const onError = (formErrors: any) => {
console.log('validation errors', formErrors)
}

  const navigation: any = useNavigation();
   const [standand, setStandard] = useState("XI (First Year)");
  const [group, setGroup] = useState("Computer Science");

  const handleSignup = () => {
    console.log('done.....')
  navigation.navigate('Home');
  }

  return (
    <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">

      <TopBar title='Profile' />
      <View>



        <View style={styles.emailViewTextStyle}>
          <Text style={styles.emailTextStyle}>Name</Text>
        </View>


      


        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                placeholder="Enter your Full Name"
                icon={Images.UserNameIcon}
                errorMessage={errors.name?.message}

              />
            );
          }}
        />

        <Text style={styles.emailTextStyle}>Email</Text>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                placeholder='Enter your Email'
                icon={Images.EmailIcon}
                errorMessage={errors.email?.message}

              />
            )
          }}
          name='email'
        />

        <Text style={styles.emailTextStyle}>Roll No</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                placeholder='Enter your Roll No'
                icon={Images.RollNo}
                errorMessage={errors.rollNumber?.message}

              />
            )
          }}
          name='rollNumber'
        />

        <Text style={styles.emailTextStyle}>Mobile No</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                placeholder='Enter your Mobile No / WhatsApp'
                icon={Images.PhoneIcon}
                errorMessage={errors.phone?.message}

              />
            )
          }}
          name='phone'
        />



        <View style={styles.emailViewTextStyle}>
          <Text style={styles.emailTextStyle}>Class</Text>
        </View>

        <CustomTextInput
          value={standand}
          onChangeText={setStandard}
          placeholder='Class'
          icon={Images.StandardIcon}
         
          isEnable={false}
        />


        <View style={styles.emailViewTextStyle}>
          <Text style={styles.emailTextStyle}>Group</Text>
        </View>


        <CustomTextInput
          value={group}
          onChangeText={setGroup}
          placeholder='Group'
          icon={Images.GroupIcon}
         
          isEnable={false}
        />


        <View style={{marginVertical:responsiveHeight(2)}}>
          <CustomButton
            title='Update Profile'
            margintop={responsiveHeight(4)}

            onPress={handleSubmit(handleSignup,onError)}
            // onPress={() => console.log('pressed')}
          />
        </View>





      </View>

    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({

  scrollView: {
    
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
  },

  screen: {
    flex: 1,
  },
  content: {
    padding: 16,
  },

  emailViewTextStyle: {
    marginTop: responsiveHeight(3)
  },
  commonTextStyle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,

    marginStart: responsiveWidth(7),
  },

  signUpText: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontWeight: 'bold',
    fontSize: 14,
  },

  textInputViewStyle: {
    marginTop: responsiveHeight(5)
  },

  signupViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(10)
  },

  passwordTextStyle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    color: Colors.PRIMARY_COLOR,
    marginStart: responsiveWidth(7),
    marginTop: responsiveHeight(3)
  },

  emailTextStyle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    color: Colors.PRIMARY_COLOR,
    marginStart: responsiveWidth(7),
  },
})