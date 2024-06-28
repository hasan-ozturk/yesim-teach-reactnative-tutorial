import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { storageHelper } from '../../utils/storageHelper'

const QuestionMainScreen = () => {

  const [randomNumber, setrandomNumber] = useState(0)


  useEffect(() => {

    storageHelper.getItem("random").then((data) => {
      setrandomNumber(data)
    })

  }, [])



  useFocusEffect(() => {
    console.log("QuestionMainScreen focused")
  })


  const setRandom = () => {
    let randomData = Math.floor(Math.random() * 1000)
    storageHelper.setItem("random", randomData)
    setrandomNumber(randomData)
    Alert.alert("Random number: " + randomData)
  }

  return (
    <View>
      <Text>{randomNumber}</Text>
      <Text>QuestionMainScreen</Text>
      <Button onPress={() => setRandom()}>Set Data</Button>
    </View>
  )
}

export default QuestionMainScreen