import { View, Text } from 'react-native'
import React from 'react'
import AppHeaderProfile from '../commons/AppHeaderProfile'
import AppHeader from '../commons/AppHeader'
import AppTextInput from '../commons/AppTextInput'
import AppButton from '../commons/AppButton'
import Style from '../style/AppStyle'

const UpdateProfile = (props) => {

    const { navigation } = props;

    const handleGoBack = () => {
        navigation.goBack();
    }

    const srcArrowLeft = require('../resouces/icon/arrowLeft.png')
    return (
        <View style={getStyleContainer()}>
            <AppHeader
                title='CHỈNH SỬA THÔNG TIN'
                srcIconLeft={srcArrowLeft}
                onPressIconLeft={handleGoBack}
                style={{}}
            />
            <AppHeaderProfile
                title1='Thông tin sẽ được lưu cho lần mua kế tiếp.'
                title2='Bấm vào thông tin chi tiết để chỉnh sửa.'
                style={{
                    avatar: getStyleAvatar(),
                    container: getStyleContainerHeader(),
                    title1: getStyleTitleHeader(),
                    title2: getStyleTitleHeader(),
                }}
            />

            <View style={getStyleContainer()}>
                <AppTextInput
                    placeholder='Họ và tên'
                    style={{
                        txtInput: getStyleTxtInput()
                    }}
                />

                <AppTextInput
                    placeholder='Email'
                    style={{
                        txtInput: getStyleTxtInput()
                    }}
                />

                <AppTextInput
                    placeholder='Địa chỉ'
                    style={{
                        txtInput: getStyleTxtInput()
                    }}
                />

                <AppTextInput
                    placeholder='Số điện thoại'
                    style={{
                        txtInput: getStyleTxtInput()
                    }}
                />
            </View>

            <AppButton
                title='LƯU THÔNG TIN'
                style={{
                    btn: getStyleBtn(),
                    txt: getStyleTxtInBtn()
                }}
            />


        </View>
    )
}

export default UpdateProfile

var getStyleTitleHeader = () => {
    return {
        ...Style.fontSize16,
        ...Style.color221F1F,
    }
}

var getStyleContainerHeader = () => {
    return {
        ...Style.justifyContentCenter,
        ...Style.alignItemsCenter,
        ...Style.marginTop30px,
        ...Style.gap30px,
        ...Style.marginBottom30,
    }
}

var getStyleAvatar = () => {
    return {
        ...Style.size90px,
        ...Style.borderCircle,
    }
}


var getStyleTxtInput = () => {
    return {
        ...Style.borderBottomWidth1px,
        ...Style.borderBottomColorABABAB,
    }
}

var getStyleContainer = () => {
    return {
        ...Style.paddingHorizontal24,
        ...Style.flex1,
        ...Style.backgroundColorWhite,
    }
}

var getStyleTxtInBtn = () => {
    return {
        ...Style.fontSize18,
        ...Style.colorWhite,
        ...Style.fontFamilyLatoRegular,
    }
}

var getStyleBtn = () => {
    return {
        ...Style.height50px,
        ...Style.backgroundColor7D7B7B,
        ...Style.height50px,
        ...Style.borderRadius8px,
        ...Style.justifyContentCenter,
        ...Style.alignItemsCenter,
        ...Style.marginBottom15,
    }
}