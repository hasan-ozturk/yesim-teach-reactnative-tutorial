import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const BillingMainScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>BillingMainScreen</Text>
      <Button onPress={() => navigation.navigate("ChangeCreditCart")}>Change Credit Cart</Button>
    </View>
  )
}

export default BillingMainScreen