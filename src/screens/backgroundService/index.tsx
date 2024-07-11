import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import BackgroundService from 'react-native-background-actions'
import { Button } from 'react-native-paper'


const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane',
    parameters: {
        delay: 1000,
    },  
}

const sleep = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time))

const veryIntensiveTask = async (taskDataArguments: any) => {
    // Example of an infinite loop task
    const { delay } = taskDataArguments
    await new Promise<void>(async (resolve) => {
        for (let i = 0; BackgroundService.isRunning(); i++) {
            console.log(i)
            await sleep(delay)
        }
    })
}


const BackgroundServiceScreen = () => {


    const start = async () => {
        try {
            console.log('Starting background service')
            await BackgroundService.start(veryIntensiveTask, options)
            console.log('Background service has been started')
        } catch (e) {
            console.error(e)
        }
    }

    const stop = async () => {
        console.log('Stopping background service')
        await BackgroundService.stop()
        console.log('Background service has been stopped')
    }

  return <>
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Background Service</Text>
      <Button onPress={start}>Start</Button>
      <Button onPress={stop}>Stop</Button>
    </SafeAreaView>
  </>
}

export default BackgroundServiceScreen