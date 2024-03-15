import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../commons/AppHeader'
import Style from '../style/AppStyle'
import AppFlatList from '../commons/AppFlatList'
import AppItemProductColumn from '../commons/AppItemProductColumn'

const ListProduct = (props) => {

    const { navigation } = props;

    const [selectCategory, setSelectCategory] = useState(categories[0].id);

    const srcIconLeft = require('../resouces/icon/arrowLeft.png');
    const srcIconRight = require('../resouces/icon/cart.png');

    const handleClickCategory = (item) => {
        setSelectCategory(item.id)
    }

    const goBack = () => {
        navigation.goBack();
    }

    const renderCategory = (item) => {
        const rItem = item.item;
        return (
            < TouchableOpacity onPress={() => handleClickCategory(rItem)}>
                <Text style={rItem.id === selectCategory ? getStyleCategorySelect() : getStyleCategory()}>{rItem.name}</Text>
            </TouchableOpacity >
        )
    }

    const renderItem = (item) => {
        const itemr = item.item
        return (
            < AppItemProductColumn
                name={itemr.name}
                type={itemr.type}
                price={itemr.price}
                srcImg={itemr.srcImg}
            />
        )
    }

    return (
        <View style={getStyleContainer()}>
            <AppHeader
                title={'CÂY TRỒNG'}
                srcIconLeft={srcIconLeft}
                srcIconRight={srcIconRight}
                onPressIconLeft={goBack}
                style={{
                    container: getStyleHeader()
                }}
            />


            <AppFlatList
                data={categories}
                renderItem={renderCategory}
                horizontal={true}
                style={{
                    container: getStyleFlatListCategory()
                }}
            />

            <AppFlatList
                data={itemList}
                renderItem={renderItem}
                numColumn={2}
                columnWrapperStyle={getStyleColumnWrapper()}
                style={{}}

            />

        </View>
    )
}

export default ListProduct

var itemList = [
    {
        id: 0,
        name: 'Spider Plant',
        type: 'Ưa bóng',
        price: '250.000dd',
        srcImg: require('../resouces/image/sp1.png')
    },
    {
        id: 1,
        name: 'Song of India',
        type: 'Ưa sáng',
        price: '240.000đ',
        srcImg: require('../resouces/image/sp2.png')
    },
]

var categories = [
    {
        id: 0,
        name: 'Tất cả'
    },
    {
        id: 1,
        name: 'Hàng mới về'
    },
    {
        id: 2,
        name: 'Ưa sáng'
    },
    {
        id: 3,
        name: 'Ưa bóng'
    }]

var getStyleFlatListCategory = () => {
    return {
        ...Style.marginVertical15
    }
}

var getStyleHeader = () => {
    return {
        ...Style.marginTop30px
    }
}

var getStyleColumnWrapper = () => {
    return {
        ...Style.gap15px,
        ...Style.justifyContentCenter,
    }
}

var getStyleCategorySelect = () => {
    return {
        ...Style.colorWhite,
        ...Style.marginRight8,
        ...Style.backgroundColor009245,
        ...Style.borderRadius4px,
        ...Style.paddingHorizontal8px,
        ...Style.paddingVertical4,
    }
}

var getStyleCategory = () => {
    return {
        ...Style.color7D7B7B,
        ...Style.marginRight8,
        ...Style.paddingHorizontal8px,
        ...Style.paddingVertical4,

    }
}

var getStyleContainer = () => {
    return {
        ...Style.flex1,
        ...Style.paddingHorizontal24,
        ...Style.backgroundColorWhite,
    }
}