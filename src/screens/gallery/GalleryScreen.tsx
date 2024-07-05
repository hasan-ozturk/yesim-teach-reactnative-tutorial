import { View, Text, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';



const GalleryScreen = () => {

    // const [image, setimage] = useState('')


    // const getPhotos = () => {
    //     launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
    //         setimage(response.assets[0].uri);
    //     });

    // }


    const lottieRef = useRef<LottieView>(null);


    const start = () => {

        lottieRef.current?.play();

    }

    const stop = () => {
        lottieRef.current?.pause();
    }

    const resume = () => {
        lottieRef.current?.resume();
    }

    const reset = () => {
        lottieRef.current?.reset();
    }
    return (
        <>
            <Button onPress={start}>Start</Button>
            <Button onPress={stop}>Stop</Button>
            <Button onPress={resume}>Resume</Button>
            <Button onPress={reset}>Reset</Button>

                <LottieView style={{height:200}} ref={lottieRef} source={require('../../palyaco.json')} />
 
            {/* <View>
                <Button onPress={getPhotos}>Get Photos from Gallery</Button>
                <Text>GalleryScreen</Text>
                <Image style={{ width: 200, height: 150 }} source={{ uri: image }} />
            </View> */}
        </>
    )
}

export default GalleryScreen