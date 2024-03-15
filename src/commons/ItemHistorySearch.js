import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const ItemHistorySearch = () => {
    return (
        <View>
            <Text style={getStyleLabel()}>Tìm kiếm gần đây</Text>
            <View style={getStyleRow()}>
                <View style={getStyleWrapLeft()}>
                    <Image style={getStyleSizeIcon20()} source={require('../resouces/icon/clock.png')} />
                    <Text style={getStyleName()}>Spider Plant </Text>
                </View>

                <TouchableOpacity>
                    <Image style={getStyleSizeIcon20()} source={require('../resouces/icon/close.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemHistorySearch

var getStyleLabel = () => {
    return {
        ...Style.fontSize16,
        ...Style.color000000,
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