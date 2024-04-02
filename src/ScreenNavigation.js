import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import Style from './style/AppStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector, useDispatch } from 'react-redux'
import { userSlice } from './redux/UserSlice'

import Login from './authen/Login'
import Register from './authen/Register'

// Tab Screen
import Home from './tabscreen/Home'
import Search from './tabscreen/Search'
import Notification from './tabscreen/Notification'
import Profile from './tabscreen/Profile'
import DetailProduct from './stackscreen/DetailProduct'
import ListProduct from './stackscreen/ListProduct'
import Cart from './stackscreen/Cart'
import UpdateProfile from './stackscreen/UpdateProfile'
import Payment from './stackscreen/Payment'
import TransactionHistory from './stackscreen/TransactionHistory'
import QA from './stackscreen/QA'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {


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
                tabBarStyle: getStyleTabBar()
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

const AuthenNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />

        </Stack.Navigator>
    )
}

const StackNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='TabNavigation'
        >
            <Stack.Screen name='TabNavigation' component={TabNavigation} />
            <Stack.Screen name='DetailProduct' component={DetailProduct} />
            <Stack.Screen name='ListProduct' component={ListProduct} />
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='UpdateProfile' component={UpdateProfile} />
            <Stack.Screen name='Payment' component={Payment} />
            <Stack.Screen name='TransactionHistory' component={TransactionHistory} />
            <Stack.Screen name='QA' component={QA} />
        </Stack.Navigator>
    )
}

const ScreenNavigation = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('user')
                if (jsonValue != null) {
                    const user = JSON.parse(jsonValue)
                    dispatch(userSlice.actions.setUser(user))
                }
            } catch (error) {
                console.log('Get data error: ', error.message);
            }
        }
        getData();
    }, [])

    const selector = useSelector(state => state.user)
    return (
        selector.user ? <StackNavigation /> : <AuthenNavigation />

    )
}

export default ScreenNavigation

var getStyleTabBar = () => {
    return {
        ...Style.paddingHorizontal48,
        ...Style.borderColorWhite,
        ...Style.backgroundColorWhite,
    }
}

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