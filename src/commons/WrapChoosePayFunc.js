import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppDoubleText from './AppDoubleText'

const WrapChoosePayFunc = (props) => {
    const { title1, title2, srcIconGreenStick, style } = props;
    return (
        <View>
            <Text style={style.label}>Hình thức thanh toán</Text>

            <TouchableOpacity>
                {title1 && <AppDoubleText
                    textLeft={title1}
                    srcIcon={srcIconGreenStick}
                    style={{
                        container: style.container,
                        icon: style.icon,
                        txtLeft: style.checked,
                    }} />}
            </TouchableOpacity>

            <TouchableOpacity>
                {title2 && <AppDoubleText
                    textLeft={title2}
                    style={{
                        container: style.container,
                        icon: style.icon,
                        txtLeft: style.checked,
                    }} />}
            </TouchableOpacity>
        </View>
    )
}

export default WrapChoosePayFunc