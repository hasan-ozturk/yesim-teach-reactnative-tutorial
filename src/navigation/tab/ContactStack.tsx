import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactListScreen from "../../screens/contact/ContactListScreen";
import AddContactScreen from "../../screens/contact/AddContactScreen";

const ContactStactScreens = createNativeStackNavigator();


const ContactStack = () => {
    return (
        <ContactStactScreens.Navigator>
            <ContactStactScreens.Screen
                name='ContactList'
                component={ContactListScreen}
            />
            <ContactStactScreens.Screen
                name='Add Contact'
                component={AddContactScreen}
            />
        </ContactStactScreens.Navigator>
    )
}

export default ContactStack;  