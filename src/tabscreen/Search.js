import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../commons/AppHeader'
import Style from '../style/AppStyle'
import AppTextInput from '../commons/AppTextInput'
import ItemHistorySearch from '../commons/ItemHistorySearch'
import AppItemProductRow from '../commons/AppItemProductRow'

const Search = () => {

    const srcIconLeft = require('../resouces/icon/arrowLeft.png');
    const srcIconSearch = require('../resouces/icon/search.png');


    return (
        <View style={getStyleFlex1()}>
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

                    style={{
                        position: getStyleIconSearch(),
                        sizeIcon: getStyleIcon24(),
                        txtInput: getStyleTextInput()
                    }}
                />

                <ItemHistorySearch />

                <AppItemProductRow
                    name={'Panse Đen | Hybrid'}
                    price={'250.000đ'}
                    quantity={'Còn 156 sp'}
                    style={{
                        txtName: getStyleNameItem(),
                        txtPrice: getStyleNameItem(),
                        txtQuantity: getStyleBlackTxt()
                    }}
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