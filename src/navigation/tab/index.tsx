import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BlogStack from './BlogStack';
import QuestionStack from './QuestionStack';
import ProfileStack from './ProfileStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactStack from './ContactStack';
import GalleryStack from './GalleryStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Text } from 'react-native-paper';


const Tab = createBottomTabNavigator();
//  const Drawer = createDrawerNavigator();


const TabMain = () => {
    return <>
        {/* <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="HelloScreen" component={HelloScreen} />
            <Drawer.Screen name="AboutScreen" component={AboutScreen} />
        </Drawer.Navigator> */}

        <Tab.Navigator>
            <Tab.Screen
                name='QuestionStack'
                component={QuestionStack}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (<MaterialCommunityIcons name="home" size={20} />)
                }}
            />
            <Tab.Screen
                name='BlogStack'
                component={BlogStack}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (<MaterialCommunityIcons name="home" size={20} />)
                }}
            />
            <Tab.Screen
                name='ProfileStack'
                component={ProfileStack}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (<MaterialCommunityIcons name="home" size={20} />)
                }}
            />
            <Tab.Screen
                name='ContactStack'
                component={ContactStack}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (<MaterialCommunityIcons name="home" size={20} />)
                }}
            />
            <Tab.Screen
                name='GalleryStack'
                component={GalleryStack}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (<MaterialCommunityIcons name="home" size={20} />)
                }}
            />
        </Tab.Navigator>
    </>
}

export default TabMain




const HelloScreen = () => {
    return <View>
        <Text>Hello</Text>
    </View>
}


const AboutScreen = () => {
    return <View>
        <Text>About</Text>
    </View>
}