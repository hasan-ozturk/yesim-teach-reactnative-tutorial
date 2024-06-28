import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterScreen from '../../../screens/auth/RegisterScreen'
import LoginScreen from '../../../screens/auth/LoginScreen'
import ForgotPasswordScreen from '../../../screens/auth/ForgotPasswordScreen'

const AuthStackScreens = createNativeStackNavigator()


const AuthStack = () => {
    return <>
        <AuthStackScreens.Navigator>
            <AuthStackScreens.Screen name='Login' component={LoginScreen} />
            <AuthStackScreens.Screen name='Register' component={RegisterScreen} />
            <AuthStackScreens.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
        </AuthStackScreens.Navigator>
    </>
}

export default AuthStack