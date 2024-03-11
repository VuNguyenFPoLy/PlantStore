import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const AppFlatList = (props) => {

    const { title, data, renderItem, numColumn, columnWrapperStyle, style } = props

    return (
        <View style={getStyleContainer()}>
            <Text style={getStyleTile()}>{title}</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={numColumn == 2 ? 2 : 1}
                columnWrapperStyle={columnWrapperStyle}
                style={style}
            />
        </View>
    )
}

export default AppFlatList




var getStyleContainer = () => {
    return {
        ...Style.marginTop15px,
        ...Style.paddingHorizontal24,
        ...Style.gap15px,

    }
}

var getStyleTile = () => {
    return {
        ...Style.fontSize24,
        ...Style.color221F1F,
        ...Style.fontFamilyLatoRegular,
    }
}

