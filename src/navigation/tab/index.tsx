import React, { useEffect } from 'react'
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
import { CategoryModel, QuestionModel } from '../../models/QuestionModel';


const Tab = createBottomTabNavigator();

//  const Drawer = createDrawerNavigator();

const TabMain = () => {


    useEffect(() => {
        openRealm()

    }, [])



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
        <Text>Hello</Text>
    </>
}

export default TabMain




export const openRealm = async () => {
    const app = new Realm.App({ id: "deviceservice-qfclgfa" });

    try {
        const credentials = Realm.Credentials.anonymous();
        const user = await app.logIn(credentials);
    
        const realm = await Realm.open({
            schema: [CategoryModel.schema, QuestionModel.schema],
            sync: {
                user: user,
                flexible: true,
                initialSubscriptions: {
                    update(subs, realm) {
                      subs.add(realm.objects(CategoryModel));
                    },
                  },
            },
        })
        return realm
    } catch (error) {
        console.log("Open realm error: ", error)
    }

}