import { View, Text, Image } from 'react-native'
import React from 'react'
import Style from './style/AppStyle'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './authen/Login'
import Register from './authen/Register'

// Tab Screen
import Home from './tabscreen/Home'
import Search from './tabscreen/Search'
import Notification from './tabscreen/Notification'
import Profile from './tabscreen/Profile'

const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

    const srcBottomIcon = {
        Home: require('../assets/resouces/icon/home.png'),
        Search: require('../assets/resouces/icon/search.png'),
        Bell: require('../assets/resouces/icon/bell.png'),
        User: require('../assets/resouces/icon/user.png'),
    }

    const setIconBottom = (route, focused) => {
        const name = route.name;

        if (name === 'Home') return focused ? <Image style={getStyleIconBottom()} source={srcBottomIcon.Home} /> : <Image style={getStyleIconBottom()} source={srcBottomIcon.Home} />

        if (name === 'Search') return focused ? <Image style={getStyleIconBottom()} source={srcBottomIcon.Search} /> : <Image style={getStyleIconBottom()} source={srcBottomIcon.Search} />

        if (name === 'Notification') return focused ? <Image style={getStyleIconBottom()} source={srcBottomIcon.Bell} /> : <Image style={getStyleIconBottom()} source={srcBottomIcon.Bell} />

        if (name === 'Profile') return focused ? <Image style={getStyleIconBottom()} source={srcBottomIcon.User} /> : <Image style={getStyleIconBottom()} source={srcBottomIcon.User} />


    }
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => setIconBottom(route, focused)
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}


const ScreenNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='TabNavigation'
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name='TabNavigation' component={TabNavigation} />
        </Stack.Navigator>
    )
}

export default ScreenNavigation

var getStyleIconBottom = () => {
    return {
        ...Style.sizeIcon24px
    }
}