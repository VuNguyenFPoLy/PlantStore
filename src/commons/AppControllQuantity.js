import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const AppControllQuantity = (props) => {

    const { quantity, txtRight, onPressMinus, onPressPlus,
        style, onPressText } = props

    const grayMinus = require('../resouces/icon/graySquareMinus.png');
    const blackMinus = require('../resouces/icon/blackSquareMinus.png');

    return (
        <View style={style.containerQuantity}>
            <View style={style.rowBtn}>
                <TouchableOpacity onPress={onPressMinus}>
                    <Image style={getStyleSizeIcon()} source={quantity == 0 ? grayMinus : blackMinus} />
                </TouchableOpacity>

                <Text style={getStyleTxtQuantity()}>{quantity}</Text>

                <TouchableOpacity onPress={onPressPlus}>
                    <Image style={getStyleSizeIcon()} source={require('../resouces/icon/blackSquarePlus.png')} />
                </TouchableOpacity>
            </View>

            <Pressable onPress={onPressText}>
                <Text style={style.txtRight}>{txtRight}</Text>
            </Pressable>
        </View>
    )
}

export default AppControllQuantity



var getStyleTxtQuantity = () => {
    return {
        ...Style.fontSize18,
        ...Style.color221F1F,

    }
}

var getStyleSizeIcon = () => {
    return {
        ...Style.sizeIcon24px
    }
}