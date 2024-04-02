import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const ItemHistorySearch = (props) => {
    const { title, touchIconRight } = props;

    return (
        <View style={getStyleContainer()}>
            <View style={getStyleRow()}>
                <View style={getStyleWrapLeft()}>
                    <Image style={getStyleSizeIcon20()} source={require('../resouces/icon/clock.png')} />
                    <Text style={getStyleName()}>{title}</Text>
                </View>

                <TouchableOpacity onPress={touchIconRight}>
                    <Image style={getStyleSizeIcon20()} source={require('../resouces/icon/close.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemHistorySearch

var getStyleContainer = () => {
    return{
    }
}



var getStyleName = () => {
    return {
        ...Style.fontSize16,
        ...Style.color221F1F,
    }
}

var getStyleWrapLeft = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.gap15px,
    }
}

var getStyleRow = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
        ...Style.marginTop20px

    }
}

var getStyleSizeIcon20 = () => {
    return {
        ...Style.sizeIcon20px
    }
}