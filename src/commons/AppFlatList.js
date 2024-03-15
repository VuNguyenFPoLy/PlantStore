import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const AppFlatList = (props) => {

    const { title, data, renderItem, numColumn, columnWrapperStyle,
        style, horizontal } = props

    return (
        <View style={style.container}>
            {title && <Text style={getStyleTile()}>{title}</Text>}

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={numColumn == 2 ? 2 : null}
                columnWrapperStyle={columnWrapperStyle}
                style={style}
                horizontal={horizontal}
            />
        </View>
    )
}

export default AppFlatList






var getStyleTile = () => {
    return {
        ...Style.fontSize24,
        ...Style.color221F1F,
        ...Style.fontFamilyLatoRegular,
        ...Style.height40,
    }
}

