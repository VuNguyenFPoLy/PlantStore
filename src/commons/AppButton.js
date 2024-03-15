import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AppButton = (props) => {

    const { title, onPress, style } = props;

    return (
        <View>
            <TouchableOpacity
                style={style.btn}
                onPress={onPress}>
                <Text style={style.txt}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AppButton
