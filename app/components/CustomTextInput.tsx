import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, KeyboardTypeOptions, Pressable,Text } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../constants/Colors';
import Images from '../constants/Images';

interface CustomTextInputProps {
    value:string,
    onChangeText:(text:string)=>void,
    placeholder:string,
    icon:any,
    type?:any,
    keyboardType?:KeyboardTypeOptions,
    isPassword?:boolean,
    errorMessage?:string,
    setErrorMessage?:boolean,
    isEnable?:boolean 
}

 export const CustomTextInput:React.FC<CustomTextInputProps>=({
    value,
    onChangeText,
    placeholder,
    icon,
    type,
    keyboardType
    ,isPassword
    ,errorMessage
    ,setErrorMessage
    ,isEnable      
}) =>{
    
 const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.container}>
    <View style={styles.innerContainner}>
    <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
   
    <TextInput
     value={value}
     onChangeText={onChangeText}
        placeholder={placeholder}
     style={styles.textInputStyle}
     keyboardType={keyboardType}
     editable={isEnable}
     secureTextEntry={isPassword && showPassword}
    />

    {isPassword && (
        <Pressable onPress={() => setShowPassword(!showPassword)}>
        <Image source={showPassword ? Images.EyeIcon : Images.EyeOffIcon} 
        style={styles.passwordIconStyle} 
        resizeMode="contain" />
        </Pressable>
    )}
    </View>

    {errorMessage ? (
        <Text style={styles.errorMessageStyle}>
            {errorMessage}</Text>
      ) : null}

    </View>
  )


    }

    const styles = StyleSheet.create({
        container: {
            width: responsiveWidth(90),
            height: responsiveHeight(13),
            flexDirection: 'column',
            alignSelf: 'center',
        
        },
    
        innerContainner: {
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        backgroundColor: Colors.WHITE_COLOR,
        marginTop: responsiveHeight(2),
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: responsiveWidth(4),
    },

    iconStyle: {
        height: responsiveHeight(5),
        width: responsiveWidth(5),
    },
    textInputStyle: {
        flex: 1,
        marginStart: responsiveWidth(4),
        fontSize:16,
        color:Colors.PRIMARY_COLOR
    },
    passwordIconStyle: {
        height: responsiveHeight(5),
        width: responsiveWidth(5),
    },
    errorMessageStyle: {
        color:Colors.ACCENT_COLOR,
        marginTop: responsiveHeight(.5),
        fontWeight: '600',
    }

    });