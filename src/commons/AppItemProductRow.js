import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const AppItemProductRow = (props) => {

    const { style, name, price, quantity, type } = props

    const srcImg = require('../resouces/image/sp1.png')

    return (
        <View style={getStyleContainer()}>
            <View style={getStyleContainerImg()}>
                <Image style={getStyleImgProduct()} source={srcImg} />
            </View>
            <View style={getStyleContainerDetail()}>
                <Text style={style.txtName}>{name}</Text>
                <View style={getStyleRowTxt()}>
                    <Text style={style.txtPrice}>{price}</Text>
                    {type && <Text>{type}</Text>}
                </View>

                <Text style={style.txtQuantity}>{quantity}</Text>

            </View>
        </View>
    )
}

export default AppItemProductRow

var getStyleContainerDetail = () => {
    return {
        ...Style.justifyContentSpaceBetween
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
