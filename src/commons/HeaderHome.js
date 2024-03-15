import { Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderHome = (props) => {

    const { title1, title2, contentTxtClick, srcIconInText, srcIconRight, srcImgBackground, style } = props
    return (
        <View>
            <StatusBar backgroundColor={'#F6F6F6'} barStyle="dark-content" />

            <View>
                <View style={style.rowCart}>
                    {title1 && <Text style={style.title}>{title1}</Text>}
                    {srcIconRight && <Image style={style.sizeIconCart} source={srcIconRight} />}
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
            </View>

        </View>
    )
}

export default HeaderHome

