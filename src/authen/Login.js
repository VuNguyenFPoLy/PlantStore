import { View, StatusBar, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'

import Style from '../style/AppStyle'
import HeaderAuthen from '../commons/HeaderAuthen'
import AppTextInput from '../commons/AppTextInput'
import ButtonAuthen from '../commons/ButtonAuthen'
import BottomAuthen from '../commons/BottomAuthen'
import AxiosInstance from '../helpers/AxiosInstance'

const Login = (props) => {
    const [emailOrPhone, setEmailOrPhone] = useState(null);
    const [password, setPassword] = useState(null);

    const { navigation } = props

    StatusBar.setHidden(true)

    const [rememberAcount, setRememberAcount] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const srcImg = require('../resouces/image/headerLogin.png');
    const srcIconEye = require('../resouces/icon/eye.png');
    const srcIconEyeOff = require('../resouces/icon/eyeOff.png');
    const srcIconGrayStick = require('../resouces/icon/grayStick.png');
    const srcIconGreenStick = require('../resouces/icon/greenStick.png');

    const handleClickLogin = async () => {
        const REGEX_EMAIL = /^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/;
        const REGEX_PHONE = /^[0-9]{10}$/;
        const REGEX_PASSWORD = /^[a-zA-Z0-9_.+-@]{6,}$/;

        if (!emailOrPhone || !password) return alert("Vui lòng điền đầy đủ thông tin");
        if (!REGEX_EMAIL.test(emailOrPhone) && !REGEX_PHONE.test(emailOrPhone)) return alert("Email hoặc sđt không đúng");
        if (password.length < 6) return alert("Mật khẩu quá ngắn");
        if (!REGEX_PASSWORD.test(password)) return alert("Mật không đúng định dạng");

        let resultEmail, resultPhone;

        if (REGEX_EMAIL.test(emailOrPhone)) {
            resultEmail = emailOrPhone
        } else {
            resultPhone = emailOrPhone
        }

        try {
            const body = {
                email: resultEmail,
                phone: resultPhone,
                password: password
            }

            const result = await AxiosInstance().post('users/login', body);

            if (result.status == true) {
                setEmailOrPhone(null);
                setPassword(null);
                navigation.navigate('TabNavigation')
            } else {
                alert('Đăng nhập thất bại')
            }
        } catch (error) {
            console.log('error', error);
            alert('Đăng nhập thất bại')
        }

    }

    const handleClickRegister = () => {
        navigation.navigate('Register')
    }

    const hanldeRememberAccount = () => {
        setRememberAcount(!rememberAcount)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


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
                            value={emailOrPhone}
                            setValue={setEmailOrPhone}
                        />

                        <AppTextInput
                            srcIcon={showPassword ? srcIconEyeOff : srcIconEye}
                            onPress={handleShowPassword}
                            style={{
                                txtInput: getStyleTextInput(),
                                sizeIcon: getStyleIconEye(),
                                position: getStyleTouchIconEye()
                            }}
                            placeholder='Mật khẩu'
                            keyboardType='default'
                            secureTextEntry={true}
                            value={password}
                            setValue={setPassword}
                        />

                        <ButtonAuthen
                            onPressTouchable={handleClickLogin}
                            onPressRemember={hanldeRememberAccount}
                            srcIconLeft={rememberAcount ? srcIconGreenStick : srcIconGrayStick}
                            titleBtn='Đăng nhập'
                        />

                        <BottomAuthen
                            contentBlackText='Bạn không có tài khoản ?'
                            contentGreenText='Tạo tài khoản'
                            onPressGreenText={handleClickRegister}

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



