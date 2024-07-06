import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Root from './src/navigation/Root'
import { YesimTechDbContext } from './src/models/YesimTechDbContext'
import { AppProvider } from '@realm/react'

const queryClient = new QueryClient()
const { RealmProvider } = YesimTechDbContext

const App = () => {

  return <>
    <QueryClientProvider client={queryClient}>
      {/* <AppProvider id='application-0-bdvqjjq'> */}
      <RealmProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </RealmProvider>
      {/* </AppProvider> */}

    </QueryClientProvider>
  </>
}

export default App

