import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppDoubleText from './AppDoubleText';

const WrapChooseShipFunc = (props) => {
    const { title1, title2, content1, content2, srcIconGreenStick, style } = props;
    return (
        <View>
            <Text style={style.label}>Phương thức vận chuyển</Text>

            <TouchableOpacity>
                <AppDoubleText
                    textLeft={title1}
                    textRight={content1}
                    srcIcon={srcIconGreenStick}
                    style={{
                        container: style.container,
                        icon: style.icon,
                        txtLeft: style.checked,
                    }} />
            </TouchableOpacity>

            <TouchableOpacity>
                <AppDoubleText
                    textLeft={title2}
                    textRight={content2}
                    style={{
                        container: style.container,
                        icon: style.icon,
                        txtLeft: style.checked,
                    }} />
            </TouchableOpacity>
        </View>
    )
}

export default WrapChooseShipFunc