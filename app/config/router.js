import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Platform } from 'react-native';

import Contacts from  '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

import { DrawerButton } from '../components/Header';


const LeftDrowerButton = ({navigation}) => {
    if (Platform.OS === 'android') {
        return <DrawerButton onPress={() => navigation.navigate('DrawerOpen')} />;
    }

    return null;
}

export const ContactsStack = StackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: (props) => ({
            title: 'Contacts',
            headerLeft: <LeftDrowerButton {...props} />
        }),
    },
    Details: {
        screen: Details,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name.first} ${navigation.state.params.name.last}`
        }),
    },
});

export const NewContactStack = StackNavigator({
   NewContact: {
       screen: NewContact,
       navigationOptions: (props) => ({
           title: 'Add Contact',
           headerLeft: <LeftDrowerButton {...props} />
       }),
   }
});

export const MeStack = StackNavigator({
    Me: {
        screen: Me,
        navigationOptions: ( props ) => ({
            title: 'Me',
            headerLeft: <LeftDrowerButton {...props} />
        }),
    }
});


export const Tabs = TabNavigator({
    Contact: {
        screen: ContactsStack,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ tintColor }) =>  <Icon name="ios-list" size={35} color={tintColor}/>
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            tabBarLabel: 'New Contact',
            tabBarIcon: ({ tintColor }) =>  <Icon name="ios-add" size={35} color={tintColor}/>
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) =>  <Icon name="ios-contact" size={35} color={tintColor}/>
        }
    }
});

export const Drawer = DrawerNavigator({
    Contacts: {
        screen: ContactsStack,
        navigationOptions: {
            drawerLabel: 'Contacts',
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            drawerLabel: 'New Contact',
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            drawerLabel: 'Me',
        }
    },
})