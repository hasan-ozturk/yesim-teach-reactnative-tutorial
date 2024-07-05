import { View, Text, FlatList, Linking, Platform, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Contacts, { Contact } from 'react-native-contacts';
import { Button } from 'react-native-paper';

const ContactListScreen = () => {

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
  }, [])


  return <>
    <Button onPress={() => Linking.openSettings()} >Open Contacts</Button>
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