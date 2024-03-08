import { View, StatusBar, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

import Style from '../style/AppStyle'
import HeaderAuthen from '../commons/HeaderAuthen'
import AppTextInput from '../commons/AppTextInput'
import ButtonAuthen from '../commons/ButtonAuthen'
import BottomAuthen from '../commons/BottomAuthen'

const Login = () => {

    StatusBar.setHidden(true)

    const srcImg = require('../resouces/image/headerLogin.png');
    const srcIconEye = require('../resouces/icon/eye.png');


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={getStyleKeyboardAvoidingView()}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}>
                <View style={getStyleContainer()}>
                    <StatusBar translucent showHideTransition={false} backgroundColor='transparent' />

                    <HeaderAuthen
                        title='Chào mừng bạn'
                        description='Đăng nhập tài khoản'
                        srcImg={srcImg}
                        style={{
                            sizeHeaderImg: getStyleHeaderImg(),
                            titleHeader: getStyletitleHeader(),
                            descriptionHeader: getStyleDescriptionHeader()
                        }}
                    />

                    <View style={getStyleContentContainer()}>
                        <AppTextInput
                            style={{
                                txtInput: getStyleTextInput(),
                                sizeIcon: getStyleIconEye(),
                                position: getStyleTouchIconEye()
                            }}
                            placeholder='Nhập email hoặc số điện thoại'
                            keyboardType='default'
                        />

                        <AppTextInput
                            srcIcon={srcIconEye}
                            style={{
                                txtInput: getStyleTextInput(),
                                sizeIcon: getStyleIconEye(),
                                position: getStyleTouchIconEye()
                            }}
                            placeholder='Mật khẩu'
                            keyboardType='default'
                            secureTextEntry={true}
                        />

                        <ButtonAuthen
                            titleBtn='Đăng nhập'
                        />

                        <BottomAuthen
                            contentBlackText='Bạn không có tài khoản ?'
                            contentGreenText='Tạo tài khoản'
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login

var getStyleContainer = () => {
    return {
        ...Style.flex1,
        ...Style.justifyContentSpaceAround,
        marginBottom: 20
    }
}

var getStyleKeyboardAvoidingView = () => {
    return {
        ...Style.flex1
    }
}

var getStyleHeaderImg = () => {
    return {
        ...Style.width100,
        height: 387.09
    }
}

var getStyletitleHeader = () => {
    return {
        ...Style.fontSize30,
        ...Style.color000000,
        ...Style.fontFamilyPoppinsBold
    }
}

var getStyleDescriptionHeader = () => {
    return {
        ...Style.fontSize18,
        ...Style.color000000,
        ...Style.fontFamilyPoppinsRegular
    }
}

var getStyleTextInput = () => {
    return {
        ...Style.borderWidth1px,
        ...Style.borderColor8B8B8B,
        ...Style.borderRadius10px,
        ...Style.paddingHorizontal15px,
        ...Style.height46px
    }
}

var getStyleIconEye = () => {
    return {
        ...Style.sizeIconEye
    }
}

var getStyleTouchIconEye = () => {
    return {
        ...Style.positionEye
    }
}

var getStyleContentContainer = () => {
    return {
        ...Style.paddingHorizontal30px,
        ...Style.marginTop20px,
    }
}



