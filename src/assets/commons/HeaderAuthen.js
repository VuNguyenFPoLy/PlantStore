import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderAuthen = (props) => {

    const { title, description, srcImg, style } = props
    return (
        <View>
            {srcImg && <Image style={style.sizeHeaderImg} source={srcImg} />}
            <View style={{ alignItems: 'center' }}>
                <Text style={style.titleHeader}>{title}</Text>
                <Text style={style.descriptionHeader}>{description}</Text>
            </View>
        </View>
    )
}

export default HeaderAuthen
