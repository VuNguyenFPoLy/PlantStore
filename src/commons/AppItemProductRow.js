import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'
import AppControllQuantity from './AppControllQuantity'

const AppItemProductRow = (props) => {

    const { style, title1, title2, title4, title3, title,
        number, srcIconLeft, srcImg, onPressIcon,
        onPressDelete, onPressMinus, onPressPlus } = props


    return (
        <View style={getStyleContainer()}>
            {srcIconLeft &&
                <TouchableOpacity onPress={onPressIcon}>
                    <Image style={getStyleSize24()} source={srcIconLeft} />
                </TouchableOpacity>}

            {srcImg && <View style={getStyleContainerImg()}>
                <Image style={getStyleImgProduct()} source={srcImg} />
            </View>}

            <View style={getStyleContainerDetail()}>
                <View style={getStyleRowTxt()}>
                    {title && <Text style={style.title}>{title}</Text>}
                    {title1 && <Text style={style.title1}>{title1}</Text>}
                </View>

                <View style={getStyleRowTxt()}>
                    {title2 && <Text style={style.title2}>{title2}</Text>}
                    {title3 && <Text style={style.title3}>{title3}</Text>}
                </View>

                {title4 && <Text style={style.title4}>{title4}</Text>}

                {number && <AppControllQuantity
                    txtRight='Xóa'
                    quantity={number}
                    onPressText={onPressDelete}
                    onPressMinus={onPressMinus}
                    onPressPlus={onPressPlus}
                    style={{
                        containerQuantity: getStyleContainerQuantityControl(),
                        rowBtn: getStyleRowControlQuantity(),
                        txtRight: getStyleTxtDelete()
                    }}
                />}

            </View>
        </View>
    )
}

export default AppItemProductRow

var getStyleSize24 = () => {
    return {
        ...Style.sizeIcon24px,
        ...Style.marginRight8,
    }
}

var getStyleTxtDelete = () => {
    return {
        ...Style.color000000,
        ...Style.fontSize16,
        ...Style.fontFamilyLatoRegular,
        ...Style.underLine,
    }
}

var getStyleContainerQuantityControl = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.gap38,
    }
}

var getStyleRowControlQuantity = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.gap20,

    }
}

var getStyleContainerDetail = () => {
    return {
        ...Style.padding5,
        ...Style.gap5
    }
}

var getStyleRowTxt = () => {
    return {
        ...Style.flexDirectionRow
    }
}

var getStyleContainer = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.gap15px,
        ...Style.marginTop15px,
        ...Style.alignItemsCenter,
    }
}

var getStyleContainerImg = () => {
    return {
        ...Style.size77px,
        ...Style.backgroundColorF6F6F6,
        ...Style.borderRadius8px,
    }
}

var getStyleImgProduct = () => {
    return {
        ...Style.width100,
        ...Style.height100,
    }
}
