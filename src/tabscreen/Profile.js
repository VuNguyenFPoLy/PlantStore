import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Style from '../style/AppStyle'
import AppHeaderProfile from '../commons/AppHeaderProfile'
import AppHeader from '../commons/AppHeader'
import AppFlatList from '../commons/AppFlatList'


const Profile = (props) => {
    StatusBar.setHidden(false);

    const { navigation } = props;

    const handleClickFlatList = (title) => {
        switch (title) {
            case 'Chỉnh sửa thông tin':
                navigation.navigate('UpdateProfile');
                break;

            case 'Đăng xuất':
                navigation.navigate('Login');
                break;

            default:
                break;
        }
    }

    const renderItem = (item) => {
        const rItem = item.item
        const logout = rItem.title === 'Đăng xuất' ? true : false;
        return (
            <TouchableOpacity onPress={handleClickFlatList.bind(this, rItem.title)}>
                <Text style={logout ? getStyleLogout() : getStyleItem()}>{rItem.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={getStyleContainer()}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <AppHeader
                title='PROFILE'
                style={{}}
            />
            <AppHeaderProfile

                style={{
                    container: getStyleContainerHeader(),
                    avatar: getStyleSizeAvatar(),
                    title1: getStyleName(),
                    title2: getStyleEmail()
                }}
            />

            <AppFlatList
                title='Chung'
                data={listItemGeneral}
                renderItem={renderItem}
                style={{
                    title: getStyleTitleFlatList()
                }}
            />

            <AppFlatList
                title='Bảo mật và Điều khoản'
                data={listItemSecurity}
                renderItem={renderItem}
                style={{
                    title: getStyleTitleFlatList()
                }}
            />
        </View>
    )
}

export default Profile

var listItemGeneral = [
    {
        _id: 0,
        title: 'Chỉnh sửa thông tin'
    },
    {
        _id: 1,
        title: 'Cẩm nang trồng cây'
    },
    {
        _id: 2,
        title: 'Lịch sử giao dịch'
    },
    {
        _id: 3,
        title: 'Q & A'
    },
]

var listItemSecurity = [
    {
        _id: 0,
        title: 'Điều khoản và điều kiện'
    },
    {
        _id: 1,
        title: 'Chính sách quyền riêng tư'
    },
    {
        _id: 2,
        title: 'Đăng xuất'
    },
]

var getStyleEmail = () => {
    return {
        ...Style.fontSize16,
        ...Style.color7F7F7F,
    }
}

var getStyleName = () => {
    return {
        ...Style.fontSize18,
        ...Style.color000000,
    }
}

var getStyleSizeAvatar = () => {
    return {
        ...Style.size40px,
        ...Style.borderCircle,
    }
}

var getStyleContainerHeader = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.gap30px,
        ...Style.marginTop35px,
    }
}

var getStyleLogout = () => {
    return {
        ...Style.fontSize18,
        ...Style.colorFF0000,
        ...Style.marginBottom15,
    }
}

var getStyleTitleFlatList = () => {
    return {
        ...Style.fontSize18,
        ...Style.color7F7F7F,
        ...Style.marginBottom15,
        ...Style.marginTop30px,
        ...Style.borderBottomWidth1px,
        ...Style.borderBottomColor7F7F7F,
        ...Style.width100,
        ...Style.paddingBottom5px,
    }
}

var getStyleItem = () => {
    return {
        ...Style.fontSize18,
        ...Style.color000000,
        ...Style.marginBottom15,
    }
}

var getStyleContainer = () => {
    return {
        ...Style.paddingHorizontal48,
        ...Style.backgroundColorWhite,
        ...Style.flex1,
    }
}