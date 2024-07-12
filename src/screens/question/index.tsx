import { View, Text, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Button, TextInput } from 'react-native-paper'
import { storageHelper } from '../../utils/storageHelper'
import DeviceInfo from 'react-native-device-info'
import { YesimTechDbContext } from '../../models/YesimTechDbContext'
import { CategoryModel, QuestionModel } from '../../models/QuestionModel'
import { openRealm } from '../../navigation/tab'
import messaging from '@react-native-firebase/messaging';

//application-0-bdvqjjq





const QuestionMainScreen = ({navigation}: any) => {


  useEffect(() => {
    messaging().onNotificationOpenedApp(async (remoteMessage:any)  => {
        console.log('Notification root :', remoteMessage);
        const screen = remoteMessage.data.screen;
        const itemId = remoteMessage.data.itemId;
        console.log('screen', screen);

        setTimeout(() => {
            navigation.navigate(screen);
        }, 3000);   
   
    });
 },[])

  const { useRealm, useQuery } = YesimTechDbContext

  const [randomNumber, setrandomNumber] = useState(0)
  const [deviceId, setDeviceId] = useState("")
  const [powerState, setpowerState] = useState({})

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")
  const [status, setstatus] = useState(false)

  const data = useQuery(
    {
      type: QuestionModel.schema.name,
    }, [status]
  )


  console.log("Data: ", data)


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
    openRealm().then((realm: any) => {
      console.log("Realm: ", realm)
      realm.write(() => {
        realm.create(CategoryModel.schema.name, {
          name: name,
          description: description
        })
      })
    }
    )
    .catch((error) => {
      console.log("Errorrrr: ", error)
    })


  }

  return (
    <View>
      <Button onPress={() => navigation.navigate("GalleryStack")}>GalleryStack</Button>
      <Button onPress={() => setstatus(!status)}>Refresh</Button>
      <Text>{randomNumber}</Text>
      <Text>QuestionMainScreen</Text>
      <Button onPress={() => setRandom()}>Set Data</Button>

      <Text>{deviceId}</Text>

      <View>
        <TextInput label="Name" value={name} onChangeText={(text) => setname(text)} />
        <TextInput label="Description" value={description} onChangeText={(text) => setdescription(text)} />
        <Button onPress={add}>Save</Button>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }: any) => {
          return <View>
            <Text>{item.name} - {item.description}</Text>
          </View>
        }}
      />
    </View>
  )
}

export default QuestionMainScreen