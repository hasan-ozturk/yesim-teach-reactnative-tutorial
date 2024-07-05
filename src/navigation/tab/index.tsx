import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BlogStack from './BlogStack';
import QuestionStack from './QuestionStack';
import ProfileStack from './ProfileStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactStack from './ContactStack';


const Tab = createBottomTabNavigator();

const TabMain = () => {
    return <>
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
                    tabBarIcon : () => (<MaterialCommunityIcons name="home" size={40} />)
                }}
            />
            <Tab.Screen
                name='ProfileStack'
                component={ProfileStack}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name='ContactStack'
                component={ContactStack}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    </>
}

export default TabMain