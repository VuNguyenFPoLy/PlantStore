import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'
import AppLinearGradient from './AppLinearGradient'

const ButtonAuthen = (props) => {

    const { onPressForgot, onPressLogin, onPressRemember, titleBtn,
        srcIconLeft } = props

    const renderText = (value) => {
        if (value) {
            if (value === 'Đăng nhập') {
                return (
                    <View style={getStyleRowParent()}>
                        <View style={getStyleRowChild()}>
                            <TouchableOpacity
                                onPress={onPressRemember}
                            >
                                <Image style={{ ...Style.sizeIcon22px }} source={srcIconLeft} />
                            </TouchableOpacity>
                            <Text style={getStyleGrayText()}>Nhớ tài khoản</Text>
                        </View>

                        <Text onPress={onPressForgot} style={getStyleGreenText()}>Forgot Password ? </Text>
                    </View>
                )
            } else if (value === 'Đăng ký') {
                return (
                    <View style={getStyleAcceptDeal()} >
                        <Text style={{ ...Style.textAlignCenter }}>Để đăng ký tài khoản, bạn đồng ý
                            <Text style={getStyleGreenTextAcceptDeal()}> Terms & Conditions </Text>
                            and
                            <Text style={getStyleGreenTextAcceptDeal()}> Privacy Policy</Text>
                        </Text>
                    </View>
                )
            }
        }
    }
    return (
        <View>

            {renderText(titleBtn)}

            <TouchableOpacity
                onPress={onPressLogin}
            >
                <AppLinearGradient
                    color={['#007537', '#4CAF50']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={getStyleBtn()}
                >

                    <Text style={getStyleTxtInBtn()}>{titleBtn}</Text>

                </AppLinearGradient>
            </TouchableOpacity>


        </View>
    )
}

export default ButtonAuthen

var getStyleAcceptDeal = () => {
    return {
        ...Style.paddingHorizontal30px,
        ...Style.justifyContentCenter,
        ...Style.alignItemsCenter
    }
}

var getStyleRowChild = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.gap2px,
        ...Style.alignItemsCenter
    }
}

var getStyleRowParent = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
        ...Style.alignItemsCenter
    }
}

var getStyleGrayText = () => {
    return {
        ...Style.fontSize13px,
        ...Style.color949090,
        ...Style.fontFamilyPoppinsMedium,
    }
}

var getStyleGreenText = () => {
    return {
        ...Style.fontSize13px,
        ...Style.color009245,
        ...Style.fontFamilyPoppinsMedium,
    }
}

var getStyleGreenTextAcceptDeal = () => {
    return {
        ...Style.fontSize13px,
        ...Style.color009245,
        ...Style.fontFamilyPoppinsMedium,
        ...Style.underLine
    }
}

var getStyleBtn = () => {
    return {
        ...Style.height50px,
        ...Style.borderRadius15px,
        ...Style.justifyContentCenter,
        ...Style.alignItemsCenter,
        ...Style.marginTop20px,
    }
}

var getStyleTxtInBtn = () => {
    return {
        ...Style.fontSize20px,
        ...Style.fontFamilyPoppinsBold,
        ...Style.colorWhite
    }
}