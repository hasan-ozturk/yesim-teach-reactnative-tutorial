import { View, Text, Button } from 'react-native'
import React from 'react'

const BlogMainScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>BlogMainScreen</Text>
      <Button
        title='Go to Blog Detail'
        onPress={() => navigation.navigate('BlogDetail')}/>
    </View>
  )
}

export default BlogMainScreen