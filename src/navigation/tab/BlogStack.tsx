import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BlogMainScreen from '../../screens/blog'
import BlogDetailScreen from '../../screens/blog/BlogDetailScreen'
import MapViewScreen from '../../screens/mapview'


const BlogStackScreens = createNativeStackNavigator()

const BlogStack = () => {
  return <>
    <BlogStackScreens.Navigator>
      <BlogStackScreens.Screen name='Map' component={MapViewScreen} />
      {/* <BlogStackScreens.Screen name='Blog' component={BlogMainScreen} /> */}
      <BlogStackScreens.Screen
        name='BlogDetail'
        component={BlogDetailScreen}
        options={
          ({ route }: any) => ({ title: route.params?.title})

        }

      />
    </BlogStackScreens.Navigator>
  </>
}

export default BlogStack