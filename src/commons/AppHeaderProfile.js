import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const AppHeaderProfile = (props) => {

    const { style, srcAvatar, title1, title2 } = props;
    
    return (
        <View style={style.container}>
            <TouchableOpacity>
                <Image style={style.avatar} source={srcAvatar} />
            </TouchableOpacity>

            <View>
                <Text style={style.title1}> {title1 || 'Vũ Nguyễn'}</Text>
                <Text style={style.title2}>{title2 || 'vuvu@gmail.com'}</Text>
            </View>
        </View>
    )
}

export default AppHeaderProfile





