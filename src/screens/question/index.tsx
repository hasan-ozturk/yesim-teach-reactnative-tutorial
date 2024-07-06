import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Button, TextInput } from 'react-native-paper'
import { storageHelper } from '../../utils/storageHelper'
import DeviceInfo from 'react-native-device-info'
import { YesimTechDbContext } from '../../models/YesimTechDbContext'
import { QuestionModel } from '../../models/QuestionModel'


const { useRealm } = YesimTechDbContext


const QuestionMainScreen = () => {

  const [randomNumber, setrandomNumber] = useState(0)
  const [deviceId, setDeviceId] = useState("")
  const [powerState, setpowerState] = useState({})

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")

  const realm = useRealm()


  Realm.open({}).then(realm => {
    console.log("Realm is located at: " + realm.path);
});

  useEffect(() => {

    storageHelper.getItem("random").then((data) => {
      setrandomNumber(data)
    })

    // let data = DeviceInfo.getDeviceId();
    // setDeviceId(data)

    // DeviceInfo.getPowerState().then((data) => {
    //   console.log("Power state: ", data)
    // })

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


  const add = () => {
    realm.write(() => {
      var result = realm.create(QuestionModel.schema.name, {
        name: name,
        description: description
      })

      // get result id from realm
      console.log("Result id: ", result._objectKey())
    })



  }

  return (
    <View>
      <Text>{randomNumber}</Text>
      <Text>QuestionMainScreen</Text>
      <Button onPress={() => setRandom()}>Set Data</Button>

      <Text>{deviceId}</Text>

      <View>
        <TextInput label="Name" value={name} onChangeText={(text) => setname(text)} />
        <TextInput label="Description" value={description} onChangeText={(text) => setdescription(text)} />
        <Button onPress={add}>Save</Button>
      </View>
    </View>
  )
}

export default QuestionMainScreen