import { View, Text } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'
import AppTextInput from '../commons/AppTextInput'

const WrapTextInputDetailPayment = (props) => {

    const { title, value1, value2, value3, value4,
        setValue1, setValue2, setValue3, setValue4 } = props

    return (
        <View>
            <View>
                {title && <Text style={getStyleLabel()}>{title}</Text>}
                <AppTextInput
                    value={value1}
                    placeholder='Họ và tên'
                    setValue={setValue1}
                    style={{
                        txtInput: getStyleTxtInput()
                    }}
                />

                <AppTextInput
                    value={value2}
                    placeholder='Email'
                    setValue={setValue2}
                    style={{
                        txtInput: getStyleTxtInput()
                    }}
                />

                <AppTextInput
                    value={value3}
                    placeholder='Địa chỉ'
                    setValue={setValue3}
                    style={{
                        txtInput: getStyleTxtInput()
                    }}
                />

                <AppTextInput
                    value={value4}
                    placeholder='Số điện thoại'
                    setValue={setValue4}
                    style={{
                        txtInput: getStyleTxtInput()
                    }}
                />
            </View>
        </View>
    )
}

export default WrapTextInputDetailPayment

var getStyleTxtInput = () => {
    return {
        ...Style.borderBottomWidth05px,
        ...Style.borderBottomColorABABAB,
    }
}

var getStyleLabel = () => {
    return {
        ...Style.fontSize18,
        ...Style.color221F1F,
        ...Style.borderBottomWidth05px,
        ...Style.borderBottomColor221F1F,
        ...Style.paddingBottom5px,
    }
}