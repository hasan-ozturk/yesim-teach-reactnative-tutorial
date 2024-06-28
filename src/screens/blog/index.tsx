import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Pressable, ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { Button } from 'react-native-paper'


const BlogMainScreen = ({ navigation }: any) => {

  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/posts')
      return response.json()
    },
  })

  return <>
    <ScrollView>
      {
        isLoading ? <Text>Loading...</Text> : data.map((post: any) => {
          return <Pressable onPress={() => navigation.navigate("BlogDetail", { id: post.id })}>
            <Card key={post.id}>
              <Card.Cover source={{ uri: post.image }} />
              <Card.Content>
                <Text>{post.title}</Text>
                <Text>{post.description}</Text>
              </Card.Content>
            </Card>
          </Pressable>
        })
      }
    </ScrollView>

  </>
}

export default BlogMainScreen