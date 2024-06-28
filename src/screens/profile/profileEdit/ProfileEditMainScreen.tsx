import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const ProfileEditMainScreen = ({ navigation }: any) => {
  return (<>
    <View>
      <Text>ProfileEdit Screens</Text>
      <Button onPress={() => navigation.navigate("ProfileUploadPhoto")}>Upload Photo</Button>
      <Button onPress={() => navigation.navigate("ProfileChangePassword")}>Change Password</Button>
      <Button onPress={() => navigation.navigate("ProfileChangeLanguage")}>Change Language</Button>
    </View>
    <View>
      <Text>Billing Screens</Text>
      <Button onPress={() => navigation.navigate("Billing")}>Billing Main</Button>
    </View>
  </>

  )
}

export default ProfileEditMainScreen