import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Root from './src/navigation/Root'
import { YesimTechDbContext } from './src/models/YesimTechDbContext'
import { Alert, Platform } from 'react-native'
import messaging from '@react-native-firebase/messaging';
import FirebaseContainer from './src/containers/FirebaseContainer'


const queryClient = new QueryClient()
const { RealmProvider } = YesimTechDbContext

const App = () => {


  return <>
    <FirebaseContainer>
      <QueryClientProvider client={queryClient}>
        {/* <AppProvider id='application-0-bdvqjjq'> */}
        <RealmProvider>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </RealmProvider>
        {/* </AppProvider> */}

      </QueryClientProvider>
    </FirebaseContainer>

  </>
}

export default App

