import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Root from './src/navigation/Root'
import { YesimTechDbContext } from './src/models/YesimTechDbContext'

const queryClient = new QueryClient()
const { RealmProvider } = YesimTechDbContext

const App = () => {

  return <>
    <QueryClientProvider client={queryClient}>
      <RealmProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </RealmProvider>
    </QueryClientProvider>
  </>
}

export default App

