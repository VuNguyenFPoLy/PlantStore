import { View, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'

import Style from '../style/AppStyle'
import HeaderAuthen from '../commons/HeaderAuthen'
import AppTextInput from '../commons/AppTextInput'
import ButtonAuthen from '../commons/ButtonAuthen'
import BottomAuthen from '../commons/BottomAuthen'
import AxiosInstance from '../helpers/AxiosInstance'

import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { registerThunk } from '../redux/RegisterThunk'

const Register = (props) => {

    const { navigation } = props;
    StatusBar.setHidden(true)

    const srcImg = require('../resouces/image/headerRegister.png');
    const srcIconEye = require('../resouces/icon/eye.png');
    const srcIconEyeOff = require('../resouces/icon/eyeOff.png');

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const [focusName, setFocusName] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false);
    const [focusPhoneNumber, setFocusPhoneNumber] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const selector = useSelector;


    const handleClickGoBack = () => {
        navigation.goBack()
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const setNullTxtInput = () => {
        setFullName('')
        setEmail('')
        setPhoneNumber('')
        setPassword('')
    }

    const handleRegister = async () => {

        const REGEX_EMAIL = /^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/;
        const REGEX_NAME = /^[a-zA-Z ]*$/;
        const REGEX_PHONE = /^[0-9]{10}$/;
        const REGEX_PASSWORD = /^[a-zA-Z0-9_.+-@]{6,}$/;

        if (!fullName || !email || !phoneNumber || !password) return alert("Vui lòng nhập đầy đủ thông tin");
        if (!REGEX_NAME.test(fullName)) return alert("Họ tên không đúng");
        if (!REGEX_EMAIL.test(email)) return alert("Email không đúng");
        if (!REGEX_PHONE.test(phoneNumber)) return alert("Số điện thoại không đúng");
        if (password.length < 6) return alert("Mật khẩu quá ngắn");
        if (!REGEX_PASSWORD.test(password)) return alert("Mật khẩu không đúng định dạng");

        AxiosInstance
        try {
            const body = {
                name: fullName,
                email: email,
                phone: phoneNumber,
                password: password
            }

            // const result = await AxiosInstance().post('/users/register', body);
            const result = await dispatch(registerThunk(body));

            console.log(result);

            if (result.payload) {
                setNullTxtInput();
                navigation.navigate('Login')
            } else {
                alert('Đăng ký thất bại')
            }
        } catch (error) {
            console.log('error', error);
            alert('Đăng ký thất bị')
        }
    }


    return (

        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <View style={getStyleContainer()}>
                <StatusBar translucent showHideTransition={false} backgroundColor='transparent' />
                <HeaderAuthen
                    title='Đăng ký'
                    description='Tạo tài khoản'
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
                            txtInput: focusName ? getStyleTxtInputFocus() : getStyleTextInput(),
                            sizeIcon: getStyleIconEye(),
                            position: getStyleTouchIconEye()
                        }}
                        placeholder='Họ tên'
                        keyboardType='default'
                        setValue={setFullName}
                        value={fullName}
                        onFocus={() => setFocusName(true)}
                        onBlur={() => setFocusName(false)}
                    />

                    <AppTextInput
                        style={{
                            txtInput: focusEmail ? getStyleTxtInputFocus() : getStyleTextInput(),
                            sizeIcon: getStyleIconEye(),
                            position: getStyleTouchIconEye()
                        }}
                        placeholder='E-mail'
                        keyboardType='email-address'
                        setValue={setEmail}
                        value={email}
                        onFocus={() => setFocusEmail(true)}
                        onBlur={() => setFocusEmail(false)}
                    />

                    <AppTextInput
                        style={{
                            txtInput: focusPhoneNumber ? getStyleTxtInputFocus() : getStyleTextInput(),
                            sizeIcon: getStyleIconEye(),
                            position: getStyleTouchIconEye()
                        }}
                        placeholder='Số điện thoại'
                        keyboardType='number-pad'
                        setValue={setPhoneNumber}
                        value={phoneNumber}
                        onFocus={() => setFocusPhoneNumber(true)}
                        onBlur={() => setFocusPhoneNumber(false)}
                    />

                    <AppTextInput
                        srcIcon={showPassword ? srcIconEyeOff : srcIconEye}
                        onPress={handleShowPassword}
                        style={{
                            txtInput: focusPassword ? getStyleTxtInputFocus() : getStyleTextInput(),
                            sizeIcon: getStyleIconEye(),
                            position: getStyleTouchIconEye()
                        }}
                        placeholder='Mật khẩu'
                        keyboardType='default'
                        secureTextEntry={!showPassword}
                        setValue={setPassword}
                        value={password}
                        onFocus={() => setFocusPassword(true)}
                        onBlur={() => setFocusPassword(false)}
                    />

                    <ButtonAuthen
                        titleBtn='Đăng ký'
                        onPressTouchable={handleRegister}
                    />

                </View>

                <BottomAuthen
                    contentBlackText='Tôi đã có tài khoản '
                    contentGreenText='Đăng nhập'
                    onPressGreenText={handleClickGoBack}
                />
            </View>
        </TouchableWithoutFeedback>


    )
}

export default Register

var getStyleContainer = () => {
    return {
        ...Style.flex1,
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
        height: 240.09,
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

var getStyleTxtInputFocus = () => {
    return {
        ...Style.borderWidth1px,
        ...Style.borderColor009245,
        ...Style.borderRadius10px,
        ...Style.paddingHorizontal15px,
        ...Style.height46px,
    }
}

var getStyleTextInput = () => {
    return {
        ...Style.borderWidth1px,
        ...Style.borderColor8B8B8B,
        ...Style.borderRadius10px,
        ...Style.paddingHorizontal15px,
        ...Style.height46px,
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
        ...Style.gap15px,
    }
}



