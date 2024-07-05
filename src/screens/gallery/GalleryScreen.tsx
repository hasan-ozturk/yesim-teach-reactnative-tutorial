import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import { Button } from 'react-native-paper';



const GalleryScreen = () => {

    const [image, setimage] = useState('')


    const getPhotos = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
            setimage(response.assets[0].uri);
        });

    }

    return (
        <View>
            <Button onPress={getPhotos}>Get Photos from Gallery</Button>
            <Text>GalleryScreen</Text>
            <Image style={{width:200, height:150}} source={{ uri: image }} />
        </View>
    )
}

export default GalleryScreen