import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppHeader from '../commons/AppHeader'
import Style from '../style/AppStyle'
import AppFlatList from '../commons/AppFlatList'
import AppItemProductColumn from '../commons/AppItemProductColumn'
import AxiosInstance from '../helpers/AxiosInstance'

const ListProduct = (props) => {

    const { navigation } = props;

    const objType = props?.route?.params?.objType;

    const [getRole, setGetRole] = useState(objType._id);
    const [categories, setCategories] = useState([]);
    const [selectCategory, setSelectCategory] = useState();
    const [products, setProducts] = useState(objType.data);

    const srcIconLeft = require('../resouces/icon/arrowLeft.png');
    const srcIconRight = require('../resouces/icon/cart.png');

    // Get categories

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await AxiosInstance().get('/categories');
                if (response.status == true) {
                    const defaultCategory = response.data.filter(item => item.role == 0);
                    const filterCategory = response.data.filter(item => item.role == getRole);
                    const spread = [...defaultCategory, ...filterCategory];

                    setCategories(spread);
                    setSelectCategory(spread[0]._id);

                }
            } catch (error) {
                console.log('Get categories error: ', error.message);
            }
        }
        getCategories();
    }, []);

    const handleClickCategory = (item) => {
        setSelectCategory(item._id)

        let filterProduct;

        for (let i = 0; i < 3; i++) {
            filterProduct = objType.data.filter(product => product.categories[i] === item._id);

            if (filterProduct.length != 0) {
                setProducts(filterProduct);
            }
        }
    }

    const goBack = () => {
        navigation.goBack();
    }

    const handleClickItem = (item) => {
        navigation.navigate('DetailProduct', { _id: item._id })
    }

    const renderCategory = (item) => {
        const rItem = item.item;
        return (
            < TouchableOpacity onPress={() => handleClickCategory(rItem)}>
                <Text style={rItem._id === selectCategory ? getStyleCategorySelect() : getStyleCategory()}>{rItem.name}</Text>
            </TouchableOpacity >
        )
    }

    const renderItem = (item) => {
        const rItem = item.item

        return (
            <TouchableOpacity onPress={() => handleClickItem(rItem)}>
                < AppItemProductColumn
                    name={rItem.name}
                    type={rItem.type}
                    price={rItem.price.toFixed(3) + 'đ'}
                    srcImg={{ uri: rItem.image }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={getStyleContainer()}>
            <StatusBar barStyle="dark-content" backgroundColor={'white'} />
            <AppHeader
                title={objType.title.toUpperCase()}
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
                showsHorizontalScrollIndicator={false}
            />

            <AppFlatList
                data={products}
                renderItem={renderItem}
                numColumn={2}
                columnWrapperStyle={getStyleColumnWrapper()}
                style={{
                    container: getStyleFlatListProduct()
                }}

            />

        </View>
    )
}

export default ListProduct

var getStyleFlatListProduct = () => {
    return {
        ...Style.flex1
    }
}


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