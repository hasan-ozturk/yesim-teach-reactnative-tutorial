import { useQuery } from '@tanstack/react-query'
import React, { useRef } from 'react'
import { FlatList, Pressable, ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { Button } from 'react-native-paper'


const BlogMainScreen = ({ navigation }: any) => {

  console.log("BlogMainScreen")

  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/posts')
      return response.json()
    },
  })

  const renderItem = ({ item }: any) => {
    return <Pressable key={item.id} onPress={() => navigation.navigate("BlogDetail", 
    { id: item.id,
      title: item.title
     })}>
      <Card key={item.id}>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Content>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </Card.Content>
      </Card>
    </Pressable>
  }

  const ref = useRef<FlatList>(null);

  const scroll = () => {
    ref.current!.scrollToIndex({ index: 5 });
  }


  return <>
    <Button onPress={scroll}>Scroll to index</Button>
    <FlatList
      ref={ref}
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={<Text style={{ fontSize: 35, textAlign: 'center' }}>Blog</Text>}
    />
  </>

  return <>
    <ScrollView>
      {
        isLoading ? <Text>Loading...</Text> : data.map((post: any) => {
          return <Pressable key={post.id} onPress={() => navigation.navigate("BlogDetail", { id: post.id })}>
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