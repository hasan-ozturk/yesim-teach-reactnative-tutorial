import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Root from './src/navigation/Root'

const queryClient = new QueryClient()

const App = () => {

  return <>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </QueryClientProvider>
  </>
}

export default App

