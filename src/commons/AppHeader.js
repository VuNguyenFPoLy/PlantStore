import { Image, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle';

const AppHeader = (props) => {

    const { srcIconLeft, srcIconRight, title,
        onPressIconLeft, onPressIconRight, style } = props;

    return (
        <View style={style.container}>

            <View style={getStyleRow()}>
                <View>
                    {srcIconLeft && <TouchableOpacity onPress={onPressIconLeft}>
                        <Image style={getStyleIcon()} source={srcIconLeft} />
                    </TouchableOpacity>}
                </View>

                <Text style={getStyleTxtTitle()}>{title}</Text>

                <View style={getStyleWidth24()}>
                    {srcIconRight && <TouchableOpacity onPress={onPressIconRight}>
                        <Image style={getStyleIcon()} source={srcIconRight} />
                    </TouchableOpacity>}
                </View>
            </View>


        </View>
    )
}

export default AppHeader

var getStyleWidth24 = () => {
    return {
        ...Style.width24
    }
}

var getStyleTxtTitle = () => {
    return {
        ...Style.color000000,
        ...Style.fontSize16,
        ...Style.fontFamilyLatoRegular,

    }
}

var getStyleIcon = () => {
    return {
        ...Style.sizeIcon24px
    }
}

var getStyleRow = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.alignItemsCenter,
        ...Style.justifyContentSpaceBetween,
        ...Style.paddingVertical17px,
    }
}