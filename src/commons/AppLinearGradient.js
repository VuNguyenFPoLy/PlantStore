import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const AppLinearGradient = (props) => {

    const { color, start, end, style, children } = props;

    return (
        <LinearGradient
            colors={color}
            start={start}
            end={end}
            style={style}
        >
            {children}
        </LinearGradient>
    )
}

export default AppLinearGradient