import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { storageHelper } from '../../utils/storageHelper'
import DeviceInfo from 'react-native-device-info'

const QuestionMainScreen = () => {

  const [randomNumber, setrandomNumber] = useState(0)
  const [deviceId, setDeviceId] = useState("")
  const [powerState, setpowerState] = useState({})


  useEffect(() => {

    storageHelper.getItem("random").then((data) => {
      setrandomNumber(data)
    })

    let data = DeviceInfo.getDeviceId();
    setDeviceId(data)

    DeviceInfo.getPowerState().then((data) => {
      console.log("Power state: ", data)
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

      <Text>{deviceId}</Text>
    </View>
  )
}

export default QuestionMainScreen