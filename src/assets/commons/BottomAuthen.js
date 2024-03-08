import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const BottomAuthen = (props) => {

    const { onPressLoginWithFb, onPressLoginWithGg, onPressRegister,
        contentBlackText, contentGreenText } = props


    return (
        <View style={getStyleContainer()}>
            <View style={getStyleRowLine()}>
                <Image style={getStyleSizeLine()} source={require('../resouces/image/greenLine.png')} />
                <Text style={getStyleTxtBetweenLine()} >Hoặc</Text>
                <Image style={getStyleSizeLine()} source={require('../resouces/image/greenLine.png')} />
            </View>

            <View style={getStyleRowFbGg()}>
                <TouchableOpacity>
                    <Image style={getStyleSize32px()} source={require('../resouces/icon/fb.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={getStyleSize32px()} source={require('../resouces/icon/gg.png')} />
                </TouchableOpacity>
            </View>

            <Text style={getStyleBlackText()}>{contentBlackText} <Text style={getStyleGreenText()}>{contentGreenText}</Text></Text>
        </View>
    )
}

export default BottomAuthen

var getStyleContainer = () => {
    return {
        ...Style.marginTop20px
    }
}

var getStyleGreenText = () => {
    return {
        ...Style.fontSize12,
        ...Style.fontFamilyPoppinsRegular,
        ...Style.color009245,
    }
}

var getStyleBlackText = () => {
    return {
        ...Style.fontSize12,
        ...Style.fontFamilyPoppinsRegular,
        ...Style.color000000,
        ...Style.textAlignCenter,
        ...Style.marginTop30px,

    }
}

var getStyleRowFbGg = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.alignItemsCenter,
        ...Style.justifyContentCenter,
        ...Style.marginTop35px,
        ...Style.gap30px,

    }
}

var getStyleSize32px = () => {
    return {
        ...Style.sizeIcon32px,
    }
}

var getStyleSizeLine = () => {
    return {
        ...Style.height1px,
        ...Style.flex2,
    }
}

var getStyleRowLine = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.alignItemsCenter,
    }
}

var getStyleTxtBetweenLine = () => {
    return {
        ...Style.fontSize12,
        ...Style.fontFamilyPoppinsMedium,
        ...Style.color000000,
        ...Style.marginHorizontal9px,

    }
}