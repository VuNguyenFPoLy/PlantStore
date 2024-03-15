import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const AppItemProductColumn = (props) => {

    const { name, type, price, srcImg } = props;

    return (
        <View>
            <View style={getStyleContainerImg()}>
                {srcImg && <Image style={getStyleImgItem()} source={srcImg} />}
            </View>
            <View>
                <Text style={getStyleTxtName()}>{name}</Text>
                <Text>{type}</Text>
                <Text style={getStyleTxtPrice()}>{price}</Text>
            </View>
        </View>
    )
}

export default AppItemProductColumn


var getStyleTxtPrice = () => {
    return {
        ...Style.fontSize16,
        ...Style.fontFamilyLatoRegular,
        ...Style.color007537,
    }
}

var getStyleTxtName = () => {
    return {
        ...Style.fontSize16,
        ...Style.fontFamilyLatoRegular,
        ...Style.color221F1F,
    }
}

var getStyleContainerImg = () => {
    return {
        ...Style.borderRadius8px,
        ...Style.backgroundColorF6F6F6,
        ...Style.width155,
        ...Style.height134,
    }
}



var getStyleImgItem = () => {
    return {
        ...Style.width100,
        ...Style.height100,
    }
}