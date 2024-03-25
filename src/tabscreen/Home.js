import { View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderHome from '../commons/HeaderHome'
import Style from '../style/AppStyle'
import AppFlatList from '../commons/AppFlatList'
import AppItemProductColumn from '../commons/AppItemProductColumn'
import AppDoubleText from '../commons/AppDoubleText'
import AxiosInstance from '../helpers/AxiosInstance'
import ListProduct from '../stackscreen/ListProduct'


const Home = (props) => {
    const [allProduct, setAllProduct] = useState([]);
    const [listPlants, setListPlants] = useState([]);
    const [listPots, setListPots] = useState([]);
    const [listTools, setListTools] = useState([]);

    const { navigation } = props
    StatusBar.setHidden(false)

    const srcIconRight = require('../resouces/icon/circleCart.png');
    const srcIconInText = require('../resouces/icon/greenArrowRight.png');
    const srcImgBackground = require('../resouces/image/headerHome.png');

    // get all product
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await AxiosInstance().get('/products')
                setAllProduct(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
    }, []);

    const filterProductByRole = (data, role) => {
        return data.filter(item => item.role === role)
    }

    // set list product by role (1: plants, 2: pots, 3: tools)
    useEffect(() => {
        const setListByRole = () => {
            if (allProduct) {

                setListPlants(filterProductByRole(allProduct, 1))
                setListPots(filterProductByRole(allProduct, 2))
                setListTools(filterProductByRole(allProduct, 3))

            }
        }
        setListByRole();
    }, [allProduct]);

    const liftOfSection = [
        {
            title: 'Cây trồng',
            data: listPlants
        },
        {
            title: 'Chậu cây',
            data: listPots
        },
        {
            title: 'Dụng cụ',
            data: listTools
        },
    ]

    const onPressItem = () => {
        navigation.navigate('DetailProduct')
    }

    const onPressViewMore = () => {
        navigation.navigate('ListProduct')
    }

    const renderItem = (item) => {
        const itemr = item.item
        return (
            <TouchableOpacity onPress={() => onPressItem()}>
                < AppItemProductColumn
                    name={itemr.name}
                    type={itemr.type}
                    price={itemr.price}
                    srcImg={{ uri: itemr.image }}
                />
            </TouchableOpacity>
        )
    };

    const renderSection = (item) => {
        const rItem = item.item;
        return(
            <View style={getStyleBody()}>
                    <AppFlatList
                        title={rItem.title}
                        data={rItem.data.slice(0, 6)}
                        renderItem={renderItem}
                        numColumn={2}
                        columnWrapperStyle={getStyleColumnWrapper()}
                        style={{
                            container: getStyleContainerFlatList()
                        }}
                    />


                    <AppDoubleText
                        textRight={'Xem thêm cây trồng'}
                        onPressRight={onPressViewMore}
                        style={{
                            txtRight: getStyleViewMoreProduct()
                        }}
                    />

                </View>
        )
    }

    return (
        <SafeAreaView style={getStyleContainer()}>
            <HeaderHome
                title1={'Planta - toả sáng'}
                title2={'không gian nhà bạn'}
                contentTxtClick={'Xem hàng mới về'}
                srcIconRight={srcIconRight}
                srcImgBackground={srcImgBackground}
                srcIconInText={srcIconInText}
                style={{
                    container: getStyleContainerHeader(),
                    sizeHeaderImg: getStyleImgBackgroundHeader(),
                    title: getStyleTitleHeader(),
                    sizeIconCart: getStyleIconCart(),
                    rowCart: getStyleRowCart(),
                    rowContentClickAble: getStyleRowContenClickable(),
                    contentInImgHeader: getStyleContentInImgHeader(),
                    txtClickAble: getStyleTxtContentClickAble(),
                    sizeArrowRight: getStyleIconArrowRight()
                }}
            />

            <FlatList
                data={liftOfSection}
                renderItem={renderSection}
                keyExtractor={item => item.title}
                showsVerticalScrollIndicator={false}
            />
                

                



        </SafeAreaView>
    )
}

export default Home

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

var getStyleBody = () => {
    return {
        ...Style.paddingHorizontal24,
        ...Style.flex1
    }
}

var getStyleContainerFlatList = () => {
    return {
        ...Style.marginTop15px,
        ...Style.gap15px,

    }
}

var getStyleViewMoreProduct = () => {
    return {
        ...Style.textAlignRight,
        ...Style.underLine,
        ...Style.fontSize16,
        ...Style.color221F1F,
        ...Style.marginTop20px,
    }
}

var getStyleContainer = () => {
    return {
        ...Style.flex1,
        ...Style.backgroundColorWhite,

    }
}

var getFlex1 = () => {
    return {
        ...Style.flex1
    }
}


var getStyleIconArrowRight = () => {
    return {
        ...Style.sizeIcon24px
    }
}

var getStyleColumnWrapper = () => {
    return {
        ...Style.gap15px,
        ...Style.justifyContentCenter,
    }
}

var getStyleTxtContentClickAble = () => {
    return {
        ...Style.color007537,
        ...Style.fontSize16,
        ...Style.fontFamilyLatoRegular,

    }
}

var getStyleContentInImgHeader = () => {
    return {
        ...Style.paddingHorizontal25,

    }
}

var getStyleRowContenClickable = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.marginTop15px,

    }
}

var getStyleRowCart = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.alignItemsCenter,
        ...Style.justifyContentSpaceBetween,
        ...Style.backgroundColorF6F6F6,
        ...Style.paddingTop48,
        ...Style.paddingHorizontal25,
    }
}

var getStyleIconCart = () => {
    return {
        ...Style.width48,
        ...Style.height46
    }
}

var getStyleTitleHeader = () => {
    return {
        ...Style.fontSize24,
        ...Style.color221F1F,
        ...Style.fontFamilyLatoRegular,
        ...Style.height40,
    }
}


var getStyleImgBackgroundHeader = () => {
    return {
        ...Style.width100,
        ...Style.height200px,
    }
}

var getStyleContainerHeader = () => {
    return {
        ...Style.paddingHorizontal25,

    }
}