import { View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import Style from '../style/AppStyle'

const BannerProduct = (props) => {

    const { srcBanner } = props;
    return (
        <View style={getStyleContainerBanner()}>

           {srcBanner && <ImageBackground style={getSizeImg()} source={{uri: srcBanner}} >
                <View style={getStyleRowArrow()}>
                    <TouchableOpacity>
                        <Image style={getStyleIconArrow()} source={require('../resouces/icon/circleArrowLeft.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={getStyleIconArrow()} source={require('../resouces/icon/circleArrowRight.png')} />
                    </TouchableOpacity>
                </View>

                <View style={getStylePositionDot()}>
                    <Image style={getStyleIconDot()} source={require('../resouces/icon/threeDot.png')} />
                </View>

            </ImageBackground>}

        </View>
    )
}

export default BannerProduct

var getStyleContainerBanner = () => {
    return {
        ...Style.height270,
        ...Style.backgroundColorF6F6F6,
        ...Style.paddingHorizontal19px
    }
}

var getSizeImg = () => {
    return {
        ...Style.width100,
        ...Style.height100,
        ...Style.justifyContentCenter
    }
}

var getStyleRowArrow = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
        ...Style.flex1,
        ...Style.alignItemsCenter,
    }
}

var getStylePositionDot = () => {
    return {
        ...Style.alignItemsCenter,
        ...Style.marginBottom5,
        ...Style.justifyContentFlexEnd,
    }
}

var getStyleIconDot = () => {
    return {
        ...Style.width34,
        ...Style.height8,
    }
}

var getStyleIconArrow = () => {
    return {
        ...Style.sizeIcon24px
    }
}
