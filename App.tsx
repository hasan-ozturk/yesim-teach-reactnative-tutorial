import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabMain from './src/navigation/tab'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return <>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabMain />
      </NavigationContainer>
    </QueryClientProvider>
  </>
}

export default App

