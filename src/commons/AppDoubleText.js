import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppDoubleText = (props) => {
    const { textLeft, textRight, onPressRight, style } = props;
    return (
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
    )
}

export default AppDoubleText

