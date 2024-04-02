import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppHeader from '../commons/AppHeader'
import Style from '../style/AppStyle'
import AppTextInput from '../commons/AppTextInput'
import ItemHistorySearch from '../commons/ItemHistorySearch'
import AppItemProductRow from '../commons/AppItemProductRow'
import AxiosInstance from '../helpers/AxiosInstance'

const Search = (props) => {

    const { navigation } = props;

    const [listSearch, setListSearch] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [listSearchHistory, setListSearchHistory] = useState([]);

    const srcIconLeft = require('../resouces/icon/arrowLeft.png');
    const srcIconSearch = require('../resouces/icon/search.png');

    // get list product by name
    useEffect(() => {
        setTimeout(() => {
            if (searchName == '') return setListSearch([]);

            const searchProducts = async () => {
                try {
                    const response = await AxiosInstance().get(`/products/name/${searchName}`);
                    if (response.status == true) setListSearch(response.data);

                    return null;
                } catch (error) {
                    console.log('Search product error: ', error.message);
                }
            }
            searchProducts();
        }, 1000);
    }, [searchName]);

    // get list search history
    useEffect(() => {
        const getListSearchHistory = async () => {
            try {
                const response = await AxiosInstance().get('/searchhistories');
                if (response.status == true) setListSearchHistory(response.data);

                return null;
            } catch (error) {
                console.log('Get list search history error: ', error.message);
            }
        }
        getListSearchHistory();
    }, []);

    const handleClickItemProduct = async (item) => {
        try {
            const body = {
                name: item.name
            }
            const result = await AxiosInstance().post('/searchhistories', body);
            if (result.status == true) navigation.navigate('DetailProduct', { _id: item._id });
        } catch (error) {
            console.log('Navigate error: ', error.message);
        }
    }

    const handleDeleteSearchHistory = async (item) => {
        try {
            const result = await AxiosInstance().delete(`/searchhistories/delete/${item._id}`);
            if (result.status == true) {
                const index = listSearchHistory.indexOf(item);
                listSearchHistory.splice(index, 1);
                setListSearchHistory([...listSearchHistory]);
            }
        } catch (error) {
            console.log('Delete search history error: ', error.message);
        }
    }

    const renderItemSearchProduct = (item) => {
        const rItem = item.item;

        return (
            <TouchableOpacity onPress={() => handleClickItemProduct(rItem)}>
                <AppItemProductRow
                    srcImg={{ uri: rItem.image }}
                    title1={rItem.name + ' | ' + rItem.type}
                    title2={rItem.price.toFixed(3) + 'đ'}
                    title4={'Còn ' + rItem.quantity + ' sp'}
                    style={{
                        title1: getStyleNameItem(),
                        title2: getStyleNameItem(),
                        title4: getStyleBlackTxt()
                    }}
                />
            </TouchableOpacity>
        )
    }

    const renderItemSearchHistory = (item) => {
        const index = item.index == 0 ? true : false;
        const rItem = item.item;
        return (
            <View >
                {index && <Text style={getStyleLabel()}>Tìm kiếm gần đây</Text>}
                <ItemHistorySearch
                    title={rItem.name}
                    touchIconRight={() => handleDeleteSearchHistory(rItem)}
                />
            </View>
        )
    }


    return (
        <View style={getStyleFlex1()}>
            <StatusBar barStyle='dark-content' backgroundColor={'white'} />

            <AppHeader
                title={'TÌM KIẾM'}
                srcIconLeft={srcIconLeft}
                style={{
                    container: getStyleContainerHeader()

                }}
            />

            <View style={getStyleBody()}>
                <AppTextInput
                    placeholder={'Tìm kiếm'}
                    srcIcon={srcIconSearch}
                    setValue={setSearchName}
                    value={searchName}
                    style={{
                        position: getStyleIconSearch(),
                        sizeIcon: getStyleIcon24(),
                        txtInput: getStyleTextInput()
                    }}
                />


                <FlatList
                    data={searchName == '' ? listSearchHistory : listSearch}
                    renderItem={searchName == '' ? renderItemSearchHistory : renderItemSearchProduct}
                    keyExtractor={item => item._id.toString()}
                />

            </View>
        </View>
    )
}

export default Search

var getStyleBlackTxt = () => {
    return {
        ...Style.color000000
    }
}

var getStyleNameItem = () => {
    return {
        ...Style.fontSize16,
        ...Style.color000000,
        ...Style.fontFamilyLatoRegular
    }
}

var getStyleFlex1 = () => {
    return {
        ...Style.flex1,
        ...Style.backgroundColorWhite,
    }
}

var getStyleBody = () => {
    return {
        ...Style.paddingHorizontal48,
        ...Style.flex1
    }
}

var getStyleTextInput = () => {
    return {
        ...Style.borderBottomWidth1px,
        ...Style.borderBottomColor221F1F,
        ...Style.fontSize16,
        ...Style.colorBlack

    }
}

var getStyleIcon24 = () => {
    return {
        ...Style.sizeIcon24px
    }
}

var getStyleIconSearch = () => {
    return {
        ...Style.positionEye
    }
}

var getStyleContainerHeader = () => {
    return {
        ...Style.paddingHorizontal24,
        ...Style.marginTop30px,
    }
}

var getStyleLabel = () => {
    return {
        ...Style.fontSize16,
        ...Style.color000000,
        ...Style.marginTop20px
    }
}