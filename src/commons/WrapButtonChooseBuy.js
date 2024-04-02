import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppDoubleText from './AppDoubleText'
import AppControllQuantity from './AppControllQuantity'
import AppButton from './AppButton'
import Style from '../style/AppStyle'


const WrapButtonChooseBuy = (props) => {

    const { quantity, price, style, onPressMinus, onPressPlus, onPress } = props

    return (
        <View style={style.containerWrapBtn}>

            <View >
                <AppDoubleText
                    textLeft={`Đã chọn ${quantity} sản phẩm`}
                    textRight='Tạm tính'
                    style={{
                        row: getStyleRowTitle(),
                    }}
                />

                <AppControllQuantity
                    txtRight={price}
                    quantity={quantity}
                    onPressMinus={onPressMinus}
                    onPressPlus={onPressPlus}
                    price={price}
                    style={{
                        rowBtn: getStyleRowBtn(),
                        txtRight: getStyleTxtRight(),
                        containerQuantity: getStyleContainerQuantity()
                    }}
                />
            </View>

            <AppButton
                title='Chọn mua'
                onPress={onPress}
                disabled={quantity == 0 ? true : false}
                style={{
                    btn: quantity == 0 ? getStyleBtn() : getStyleBtnClickAble(),
                    txt: getStyleTxtBtn()
                }}
            />
        </View>

    )
}

export default WrapButtonChooseBuy

var getStyleRowTitle = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.alignItemsCenter,
        ...Style.justifyContentSpaceBetween,
        ...Style.marginBottom5
    }
}

var getStyleContainerQuantity = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.alignItemsCenter,
        ...Style.justifyContentSpaceBetween
    }
}

var getStyleTxtRight = () => {
    return {
        ...Style.fontSize24,
        ...Style.color221F1F,
        ...Style.fontFamilyLatoRegular,
    }
}

var getStyleRowBtn = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.alignItemsCenter,
        ...Style.gap15px

    }
}

var getStyleTxtBtn = () => {
    return {
        ...Style.fontSize16,
        ...Style.colorWhite,
        ...Style.fontFamilyLatoRegular,
    }
}

var getStyleBtnClickAble = () => {
    return {
        ...Style.height50px,
        ...Style.borderRadius8px,
        ...Style.backgroundColor007537,
        ...Style.alignItemsCenter,
        ...Style.justifyContentCenter,
    }
}

var getStyleBtn = () => {
    return {
        ...Style.height50px,
        ...Style.borderRadius8px,
        ...Style.backgroundColorABABAB,
        ...Style.alignItemsCenter,
        ...Style.justifyContentCenter,
    }
}