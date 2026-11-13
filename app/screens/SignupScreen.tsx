
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import TopBar from '../components/TopBar'
import CustomButton from '../components/CommonButton'
import Fonts from '../constants/Fonts'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Controller, useForm } from 'react-hook-form'
import { signupValidationSchema } from '../validations/signup'
import { yupResolver } from '@hookform/resolvers/yup'

import { CustomTextInput } from '../components/CustomTextInput'
import Images from '../constants/Images'
import { useNavigation } from '@react-navigation/native'
import apiResponseGenerator from '../services/apiGenerator'
import ApiEndPoints from '../constants/ApiEndPoints'
import ApiMethods from '../constants/ApiMethods'

const SignupScreen = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupValidationSchema),
        defaultValues: {
            name: '',
            email: '',
            rollNumber: '',
            phone: '',
            password: '',
            confirmPassword: '',
        }
    })

    const [loading, setLoading] = React.useState(false)

    const navigation: any = useNavigation()

    const handleSignup = async (data: any) => {
        if (loading) return

        const payload = {
            name: data.name,
            email: data.email,
            rollNumber: data.rollNumber,
            phone: data.phone,
            password: data.password
        }

        try {
            setLoading(true)
            const response = await apiResponseGenerator({
                method: ApiMethods.POST,
                url: ApiEndPoints.SIGNUP,
                body: payload,
            })

            if (response) {
                const newUser = {
                    id: response.user.id,
                    name: response.user.name,
                    email: response.user.email,
                    rollNumber: response.user.roll_number,
                    phone: response.user.phone,
                }

                console.log('Signup response:', response)
                console.log('New User:', newUser)
                 navigation.navigate('BottomTab')
            }
        } catch (error) {
            console.error('Error occurred while signing up:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <TopBar title='Sign Up' />
                <View>

                    <View style={styles.emailViewTextStyle}>
                        <Text style={styles.emailTextStyle}>Name</Text>
                    </View>

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <CustomTextInput
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder='Enter your Full Name'
                                    icon={Images.UserNameIcon}
                                    errorMessage={errors.name?.message}
                                />
                            )
                        }}
                        name='name'
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
                                    keyboardType='phone-pad'
                                    onChangeText={onChange}
                                    placeholder='Enter your Mobile No / WhatsApp'
                                    icon={Images.PhoneIcon}
                                    errorMessage={errors.phone?.message}
                                />
                            )
                        }}
                        name='phone'
                    />

                    <Text style={styles.emailTextStyle}>Password</Text>

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <CustomTextInput
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder='Enter your Password'
                                    icon={Images.PasswordIcon}
                                    errorMessage={errors.password?.message}
                                />
                            )
                        }}
                        name='password'
                    />

                    <Text style={styles.passwordTextStyle}>Confirm Password</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <CustomTextInput
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder='Enter your Confirm Password'
                                    icon={Images.PasswordIcon}
                                    errorMessage={errors.confirmPassword?.message}
                                />
                            )
                        }}
                        name='confirmPassword'
                    />

                    <CustomButton
                        title='Sign Up'
                        margintop={responsiveHeight(5)}
                        onPress={handleSubmit(handleSignup)}
                    />

                    <View style={styles.signupViewStyle}>
                        <Text>Already have account? </Text>
                        <Pressable onPress={() => {
                            navigation.navigate('Login')
                        }}>
                            <Text style={styles.signUpText}>Login</Text>
                        </Pressable>
                    </View>

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

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: Colors.WHITE_COLOR,
    },
    loaderOverlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
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
