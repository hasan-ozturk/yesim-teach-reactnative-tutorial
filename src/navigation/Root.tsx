import { View, Text } from 'react-native'
import React from 'react'
import TabMain from './tab'
import AuthStack from './stack/auth/AuthStack'

const Root = () => {

    let isLogin = true
    return <>
        {
            isLogin ? <TabMain /> : <AuthStack />
        }
    </>
}

export default Root