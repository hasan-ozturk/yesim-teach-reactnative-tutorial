import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import QuestionMainScreen from '../../screens/question'

const QuestionStackScreens = createNativeStackNavigator()

const QuestionStack = () => {
  return <>
    <QuestionStackScreens.Navigator>
      <QuestionStackScreens.Screen
        name='Question'
        component={QuestionMainScreen}
      />
    </QuestionStackScreens.Navigator>
  </>
}

export default QuestionStack