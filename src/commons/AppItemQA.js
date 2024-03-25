import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AppItemQA = (props) => {

    const { title1, title2, style, srcIcon } = props;

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.row}>
                {title1 &&
                    <Text style={style.title1}>{title1}</Text>
                }

                {srcIcon && <Image style={style.icon} source={srcIcon} />}

            </TouchableOpacity>

            {title2 &&
                <Text style={style.title2}>{title2}</Text>
            }
        </View>
    )
}

export default AppItemQA