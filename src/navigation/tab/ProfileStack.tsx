import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileMainScreen from '../../screens/profile'
import ProfileEditMainScreen from '../../screens/profile/profileEdit/ProfileEditMainScreen'
import ProfileEditStack from '../stack/profile/ProfileEditStack'
import BillingStack from '../stack/profile/BillingStack'


const ProfileStackScreens = createNativeStackNavigator()

const ProfileStack = () => {
  return <>
    <ProfileStackScreens.Navigator>
      <ProfileStackScreens.Screen
        name='ProfileEditStack'
        component={ProfileEditStack}
        options={{
          headerShown: false
        }}
      />
      <ProfileStackScreens.Screen
        name='Billing'
        component={BillingStack}
        options={{
          headerShown: false
        }}
      />
    </ProfileStackScreens.Navigator>
  </>
}

export default ProfileStack