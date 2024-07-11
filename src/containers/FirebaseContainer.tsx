import { View, Text, Platform } from 'react-native'
import React from 'react'
import { getFcmToken, registerListenerWithFCM } from '../utils/fcmHelper'
import DeviceInfo from 'react-native-device-info'



const FirebaseContainer = ({ children }: any) => {

    React.useEffect(() => {

        setTimeout(() => {

            getFcm()
        }, 300)
    }, [])
    React.useEffect(() => {
        const unsubscribe = registerListenerWithFCM();
        return unsubscribe;
    }, []);

    const getFcm = async () => {
        const fcmToken = await getFcmToken();
    }
    return (
        <>{children}</>
    )
}

export default FirebaseContainer