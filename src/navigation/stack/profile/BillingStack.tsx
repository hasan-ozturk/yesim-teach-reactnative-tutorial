import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BillingMainScreen from '../../../screens/profile/billing/BillingMainScreen'
import ChangeCreditCartScreen from '../../../screens/profile/billing/ChangeCreditCartScreen'


const BillingStackScreens = createNativeStackNavigator()


const BillingStack = () => {
  return <>
    <BillingStackScreens.Navigator>
      <BillingStackScreens.Screen name='BillingMain' component={BillingMainScreen}/>
      <BillingStackScreens.Screen name='ChangeCreditCart' component={ChangeCreditCartScreen}/>
    </BillingStackScreens.Navigator>

  </>
}

export default BillingStack