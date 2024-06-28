import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabMain from './src/navigation/tab'



const App = () => {
  return <>
    <NavigationContainer>
      <TabMain/>
    </NavigationContainer>
  </>
}

export default App

