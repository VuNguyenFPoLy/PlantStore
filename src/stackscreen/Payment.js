import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import AppHeader from '../commons/AppHeader'
import Style from '../style/AppStyle'
import AppTextInput from '../commons/AppTextInput'
import AppDoubleText from '../commons/AppDoubleText'
import AppButton from '../commons/AppButton'

const Payment = () => {

    const srcIconGreenStick = require('../resouces/icon/check.png');

    return (
        <View style={getStyleContainer()}>
            <StatusBar barStyle='dark-content' backgroundColor={'white'} />
            <AppHeader
                title='THANH TOÁN'
                style={{}}
            />

            <View style={getStyleBody()}>

                <View>
                    <Text style={getStyleLabel()}>Thông tin khách hàng</Text>
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

                <View>
                    <Text style={getStyleLabel()}>Phương thức vận chuyển</Text>

                    <AppDoubleText
                        textLeft='Giao hàng Nhanh - 15.000đ'
                        textRight='Dự kiến giao hàng 5-7/9'
                        srcIcon={srcIconGreenStick}
                        style={{
                            container: getStyleContainerShip(),
                            icon: getStyleIconCheck(),
                            txtLeft: getStyleTxtFont16Green(),
                        }} />

                    <AppDoubleText
                        textLeft='Giao hàng Nhanh - 15.000đ'
                        textRight='Dự kiến giao hàng 5-7/9'
                        style={{
                            container: getStyleContainerShip(),
                            icon: getStyleIconCheck(),
                            txtLeft: getStyleTxtFont16Black(),
                        }} />
                </View>

                <View>
                    <Text style={getStyleLabel()}>Hình thức thanh toán</Text>

                    <AppDoubleText
                        textLeft='Thẻ VISA/MASTERCARD'
                        srcIcon={srcIconGreenStick}
                        style={{
                            container: getStyleContainerShip(),
                            icon: getStyleIconCheck(),
                            txtLeft: getStyleTxtFont16Green(),
                        }} />

                    <AppDoubleText
                        textLeft='Thẻ ATM'
                        style={{
                            container: getStyleContainerShip(),
                            icon: getStyleIconCheck(),
                            txtLeft: getStyleTxtFont16Black(),
                        }} />
                </View>

            </View>


            <View style={getStyleContainerBottom()}>
                <View>
                    <AppDoubleText
                        textLeft='Tạm tính'
                        textRight='500.000đ'
                        style={{
                            row: getStyleRowTxtBottom(),
                            txtRight: getStyleTxtFont16Black(),
                        }} />

                    <AppDoubleText
                        textLeft='Phí vận chuyển'
                        textRight='15.000đ'
                        style={{
                            row: getStyleRowTxtBottom(),
                            txtRight: getStyleTxtFont16Black(),
                        }} />

                    <AppDoubleText
                        textLeft='Tổng cộng'
                        textRight='515.000đ'
                        style={{
                            row: getStyleRowTxtBottom(),
                            txtRight: getStyleTxtFont16Green(),
                            txtLeft: getStyleTxtFont16Black(),
                        }} />
                </View>

                <AppButton
                    title='TIẾP TỤC'
                    style={{
                        btn: getStyleBtn(),
                        txt: getStyleTxtInBtn()
                    }}
                />
            </View>

        </View>
    )
}

export default Payment

var getStyleContainerBottom = () => {
    return {
        ...Style.marginBottom15,
        ...Style.gap20,
    }
}

var getStyleTxtInBtn = () => {
    return {
        ...Style.fontSize16,
        ...Style.colorWhite
    }
}

var getStyleBtn = () => {
    return {
        ...Style.height50px,
        ...Style.borderRadius8px,
        ...Style.backgroundColorABABAB,
        ...Style.justifyContentCenter,
        ...Style.alignItemsCenter,
    }
}

var getStyleRowTxtBottom = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
    }
}

var getStyleTxtFont16Green = () => {
    return {
        ...Style.fontSize16,
        ...Style.color007537
    }
}

var getStyleTxtFont16Black = () => {
    return {
        ...Style.fontSize16,
        ...Style.color000000
    }
}

var getStyleIconCheck = () => {
    return {
        ...Style.sizeIcon24px
    }
}

var getStyleContainerShip = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
        ...Style.alignItemsCenter,
        ...Style.marginTop15px,
    }
}

var getStyleLabel = () => {
    return {
        ...Style.fontSize18,
        ...Style.color221F1F,
        ...Style.borderBottomWidth05px,
        ...Style.borderBottomColor221F1F,
        ...Style.paddingBottom5px,
    }
}

var getStyleBody = () => {
    return {
        ...Style.flex1,
        ...Style.paddingHorizontal24,
        ...Style.paddingVertical17px,
        ...Style.gap20,
    }
}

var getStyleTxtInput = () => {
    return {
        ...Style.borderBottomWidth05px,
        ...Style.borderBottomColorABABAB,
    }
}

var getStyleContainer = () => {
    return {
        ...Style.flex1,
        ...Style.paddingHorizontal24,
        ...Style.backgroundColorWhite,
    }
}