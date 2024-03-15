import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const AppControllQuantity = (props) => {

    const { quantity, txtRight, onPressMinus, onPressPlus, style } = props

    return (
        <View style={style.containerQuantity}>
            <View style={style.rowBtn}>
                <TouchableOpacity>
                    <Image style={getStyleSizeIcon()} source={require('../resouces/icon/graySquareMinus.png')} />
                </TouchableOpacity>

                <Text style={getStyleTxtQuantity()}>{quantity}</Text>
                
                <TouchableOpacity>
                    <Image style={getStyleSizeIcon()} source={require('../resouces/icon/blackSquarePlus.png')} />
                </TouchableOpacity>
            </View>

            <Text style={style.txtRight}>{txtRight}</Text>
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