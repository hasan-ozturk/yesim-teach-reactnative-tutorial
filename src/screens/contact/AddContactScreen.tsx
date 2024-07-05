import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import Contacts, { Contact } from 'react-native-contacts';



const AddContactScreen = () => {

  const [name, setname] = useState("")
  const [surname, setsurname] = useState("")
  const [phone, setphone] = useState("")


  const add = () => {
    // Contacts.openContactForm({
    //   givenName: name,
    //   familyName: surname,
    //   phoneNumbers: [{
    //     label: 'mobile',
    //     number: phone,
    //   }]
    // }).then(() => {
    //   console.log('success')
    // })

    Contacts.addContact({
      givenName: name,
      familyName: surname,
      phoneNumbers: [{
        label: 'mobile',
        number: phone,
      }]
    }).then(() => {
      console.log('success')
      Alert.alert('Contact Added')
    })
  }

  return <>
      <View>
        <TextInput 
          label="Name"
          value={name}
          onChangeText={text => setname(text)}
        />
        <TextInput 
          label="Surname"
          value={surname}
          onChangeText={text => setsurname(text)}
        />
        <TextInput 
          label="Phone"
          value={phone}
          onChangeText={text => setphone(text)}
        />

        <Button onPress={() => add()}>Add Contact</Button>
      </View>
  </>
}

export default AddContactScreen