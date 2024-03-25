import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AppTextInput = (props) => {

    const { placeholder, contentWarning, srcIcon, keyboardType,
        secureTextEntry, value, setValue, style, onPress,
        onFocus, onBlur } = props
        
    return (
        <View>
            <View>
                <TextInput
                    style={style.txtInput}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={setValue}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                {srcIcon &&
                    <TouchableOpacity
                        onPress={onPress}
                        style={style.position}>
                        <Image style={style.sizeIcon} source={srcIcon} />
                    </TouchableOpacity>}
            </View>

            {contentWarning && <Text style={style.txtErr}>{contentWarning}</Text>}
        </View>
    )
}

export default AppTextInput

