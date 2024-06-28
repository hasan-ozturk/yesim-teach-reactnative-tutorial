import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileEditMainScreen from '../../../screens/profile/profileEdit/ProfileEditMainScreen'
import UploadPhotoScreen from '../../../screens/profile/profileEdit/UploadPhotoScreen'
import ChangePasswordScreen from '../../../screens/profile/profileEdit/ChangePasswordScreen'
import ChangeLanguageScreen from '../../../screens/profile/profileEdit/ChangeLanguageScreen'


const ProfileEditStackScreens = createNativeStackNavigator()

const ProfileEditStack = () => {
  return <>
    <ProfileEditStackScreens.Navigator>
      <ProfileEditStackScreens.Screen name='ProfileEdit' component={ProfileEditMainScreen} />
      <ProfileEditStackScreens.Screen name='ProfileUploadPhoto' component={UploadPhotoScreen} />
      <ProfileEditStackScreens.Screen name='ProfileChangePassword' component={ChangePasswordScreen} />
      <ProfileEditStackScreens.Screen name='ProfileChangeLanguage' component={ChangeLanguageScreen} />
    </ProfileEditStackScreens.Navigator>
  </>
}

export default ProfileEditStack