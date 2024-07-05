import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactListScreen from "../../screens/contact/ContactListScreen";
import AddContactScreen from "../../screens/contact/AddContactScreen";

const ContactStackScreens = createNativeStackNavigator();


const ContactStack = () => {
    return (
        <ContactStackScreens.Navigator>
            <ContactStackScreens.Screen
                name='ContactList'
                component={ContactListScreen}
            />
            <ContactStackScreens.Screen
                name='Add Contact'
                component={AddContactScreen}
            />
        </ContactStackScreens.Navigator>
    )
}

export default ContactStack;  