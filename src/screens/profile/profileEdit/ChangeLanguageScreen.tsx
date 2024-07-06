import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import NetInfo from "@react-native-community/netinfo";
import Video from 'react-native-video';
import { Button } from 'react-native-paper';

const ChangeLanguageScreen = () => {

  const [connectionData, setconnectionData] = useState<any>({})
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);


  useEffect(() => {

    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setconnectionData(state)

      console.log("Connection data: ", state)
    });

  }, [])



  let videoRef = useRef<any>(null);


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ChangeLanguageScreen</Text>
      <Button
        onPress={() => setIsPlaying(p => !p)}

      >{isPlaying ? 'Stop' : 'Play'}
      </Button>
      <Button
        onPress={() => setIsMuted(m => !m)}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </Button>
      <Button onPress={() => videoRef.current!.presentFullscreenPlayer()}>Full Screen</Button>


      <Video
       ref={videoRef}
        source={
          {

            uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
        }                  // the video file
        paused={!isPlaying}  
        muted={isMuted}                // make it start    
        repeat={true}
        style={
          {
            width: 300,
            height: 300
          }
        }                // make it a loop
      />
    </View>
  )
}

export default ChangeLanguageScreen