import { View, Text, FlatList, Linking, Platform, PermissionsAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Contacts, { Contact } from 'react-native-contacts';
import { Button } from 'react-native-paper';

const ContactListScreen = ({ navigation }: any) => {

  const [contacts, setcontacts] = useState<Contact[]>([])

  useEffect(() => {

    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'ContactsList app would like to access your contacts.',
        buttonPositive: 'Accept',
      }).then(value => {
        if (value === 'granted') {
          Contacts.getAll()
            .then((contacts: Contact[]) => {
              setcontacts(contacts)
            })
            .catch((e: any) => {
              console.log(e)
            });
        }
      });
    }


    Contacts.getAll().then((contacts: Contact[]) => {
      setcontacts(contacts)
    })


    Contacts.checkPermission().then((permission: any) => {
      if (permission === 'authorized') {
        Contacts.getAll().then((contacts: Contact[]) => {
          setcontacts(contacts)
        })
      }
      else if (permission === 'denied') {
       //dialog yes or no
       Alert.alert('Permission', "Open Settings", [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => Linking.openSettings()},
      ])
      }
    }
    )


  }, [])


  return <>
    <Button onPress={() => navigation.navigate("AddContact")} >Add New Contact</Button>
    <Button onPress={() => Linking.openSettings()} >Open Settings</Button>
    <FlatList
      data={contacts}
      renderItem={({ item }: any) => <View>
        <Text style={{ fontSize: 30 }}>{item.givenName}</Text>
        <Text style={{ fontSize: 30 }}>{item.phoneNumbers[0].number}</Text>
      </View>}
    />
  </>
}

export default ContactListScreen