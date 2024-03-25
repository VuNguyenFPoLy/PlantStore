import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppDoubleText = (props) => {
    const { textLeft, textRight, onPressRight, style, srcIcon } = props;
    return (
        <View style={style.container}>
            <View style={style.row}>
                {textLeft &&
                    <Pressable>
                        <Text style={style.txtLeft}>{textLeft}</Text>
                    </Pressable>
                }

                {textRight &&
                    <Pressable onPress={onPressRight}>
                        <Text style={style.txtRight}>{textRight}</Text>
                    </Pressable>}
            </View>

            {srcIcon && <Image style={style.icon} source={srcIcon} />}
        </View>
    )
}

export default AppDoubleText

