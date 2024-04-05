import { Image, ImageBackground, Pressable, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

const HeaderHome = (props) => {

    const { title1, title2, contentTxtClick, srcIconInText,
        srcIconRight, srcImgBackground, style, onPressIconRight } = props
    return (
        <Animated.View style={style.animatedStyles}>
            <View style={style.rowCart}>
                {title1 && <Text style={style.title}>{title1}</Text>}
                {srcIconRight &&
                    <TouchableOpacity onPress={onPressIconRight}>
                        <Image style={style.sizeIconCart} source={srcIconRight} />
                    </TouchableOpacity>}
            </View>

            <ImageBackground style={style.sizeHeaderImg} source={srcImgBackground} >
                <View style={style.contentInImgHeader}>
                    {title2 && <Text style={style.title}>{title2}</Text>}
                    {contentTxtClick && <Pressable style={style.rowContentClickAble}>
                        <Text style={style.txtClickAble}>{contentTxtClick}</Text>
                        {srcIconInText && <Image style={style.sizeArrowRight} source={srcIconInText} />}
                    </Pressable>}
                </View>
            </ImageBackground>
        </Animated.View>
    )
}

export default HeaderHome

