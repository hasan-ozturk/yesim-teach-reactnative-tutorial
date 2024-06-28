import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card } from 'react-native-paper'

const BlogDetailScreen = ({ navigation, route }: any) => {

  const { id } = route.params

  const { data, isLoading } = useQuery({
    queryKey: ['posts', id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/posts/${id}`)
      return response.json()
    },
  })

  return <>
    {
      isLoading ? <Text>Loading...</Text> : <View>
        <Card>
          <Card.Cover source={{ uri: data.image }} />
          <Card.Content>
            <Text>{data.title}</Text>
            <Text>{data.description}</Text>
          </Card.Content>
        </Card>
      </View>
    }
  </>
}

export default BlogDetailScreen