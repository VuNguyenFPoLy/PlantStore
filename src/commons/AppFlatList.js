import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'

const AppFlatList = (props) => {

    const { title, data, renderItem, numColumn, columnWrapperStyle,
        style, horizontal, showsHorizontalScrollIndicator } = props

    return (
        <View style={style.container}>
            
            {title && <Text style={style.title || getStyleTile()}>{title}</Text>}

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item._id.toString()}
                numColumns={numColumn == 2 ? 2 : null}
                columnWrapperStyle={columnWrapperStyle}
                style={style}
                horizontal={horizontal}
                showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
                showsVerticalScrollIndicator={false}
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

