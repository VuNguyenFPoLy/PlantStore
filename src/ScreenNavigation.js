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
import DetailProduct from './stackscreen/DetailProduct'
import ListProduct from './stackscreen/ListProduct'

const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

    const srcBottomIcon = {
        Home: require('./resouces/icon/home.png'),
        Search: require('./resouces/icon/search.png'),
        Bell: require('./resouces/icon/bell.png'),
        User: require('./resouces/icon/user.png'),
        Dot: require('./resouces/icon/dot.png')
    }

    const setIconBottom = (route, focused) => {
        const name = route.name;

        if (name === 'Home') return focused ?
            <View style={getStyleContainerBottomIcon()}>
                <Image style={getStyleIconBottom()} source={srcBottomIcon.Home} />
                <Image style={getSizeIconDot()} source={srcBottomIcon.Dot} />
            </View>
            : <Image style={getStyleIconBottom()} source={srcBottomIcon.Home} />

        if (name === 'Search') return focused ?
            <View style={getStyleContainerBottomIcon()}>
                <Image style={getStyleIconBottom()} source={srcBottomIcon.Search} />
                <Image style={getSizeIconDot()} source={srcBottomIcon.Dot} />
            </View>
            : <Image style={getStyleIconBottom()} source={srcBottomIcon.Search} />

        if (name === 'Notification') return focused ?
            <View style={getStyleContainerBottomIcon()}>
                <Image style={getStyleIconBottom()} source={srcBottomIcon.Bell} />
                <Image style={getSizeIconDot()} source={srcBottomIcon.Dot} />
            </View>
            : <Image style={getStyleIconBottom()} source={srcBottomIcon.Bell} />

        if (name === 'Profile') return focused ?
            <View style={getStyleContainerBottomIcon()}>
                <Image style={getStyleIconBottom()} source={srcBottomIcon.User} />
                <Image style={getSizeIconDot()} source={srcBottomIcon.Dot} />
            </View>
            : <Image style={getStyleIconBottom()} source={srcBottomIcon.User} />


    }
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => setIconBottom(route, focused),
                tabBarStyle: { ...Style.paddingHorizontal48 }
            })}
            initialRouteName='Home'
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
            initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name='TabNavigation' component={TabNavigation} />
            <Stack.Screen name='DetailProduct' component={DetailProduct} />
            <Stack.Screen name='ListProduct' component={ListProduct} />



        </Stack.Navigator>
    )
}

export default ScreenNavigation

var getStyleContainerBottomIcon = () => {
    return {
        ...Style.alignItemsCenter,
        ...Style.justifyContentCenter,
    }
}

var getSizeIconDot = () => {
    return {
        ...Style.sizeIconDot,
        ...Style.marginTop2,

    }
}

var getStyleIconBottom = () => {
    return {
        ...Style.sizeIcon24px
    }
}