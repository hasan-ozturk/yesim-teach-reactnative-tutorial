import { View, Text } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native'

const QuestionMainScreen = () => {

  useFocusEffect(() => {
    console.log("QuestionMainScreen focused")
  })
  
  return (
    <View>
      <Text>QuestionMainScreen</Text>
    </View>
  )
}

export default QuestionMainScreen