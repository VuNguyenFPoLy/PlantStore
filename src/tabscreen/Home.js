import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderHome from '../commons/HeaderHome'
import Style from '../style/AppStyle'
import AppFlatList from '../commons/AppFlatList'
import AppItemProductColumn from '../commons/AppItemProductColumn'
import AppDoubleText from '../commons/AppDoubleText'


const Home = (props) => {

    const { navigation } = props
    StatusBar.setHidden(false)

    const srcIconRight = require('../resouces/icon/circleCart.png');
    const srcIconInText = require('../resouces/icon/greenArrowRight.png');
    const srcImgBackground = require('../resouces/image/headerHome.png');

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
                    srcImg={itemr.srcImg}
                />
            </TouchableOpacity>
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

            <View style={getStyleBody()}>
                <AppFlatList
                    title={'Cây trồng'}
                    data={itemList}
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