import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import AppHeader from '../commons/AppHeader'
import Style from '../style/AppStyle'
import AppFlatList from '../commons/AppFlatList'
import AppItemProductRow from '../commons/AppItemProductRow'

const TransactionHistory = () => {
    const srcImg = require('../resouces/image/sp1.png');


    const renderItem = (item) => {
        const rItem = item.item;
        const success = 'Đặt hàng thành công';
        const fail = 'Đã hủy đơn hàng';
        return (
            <TouchableOpacity style={getStyleContainerItem()}>
                <Text style={getStyleDate()}>{rItem.date}</Text>

                <AppItemProductRow
                    srcImg={srcImg}
                    title1={rItem.status === 0 ? fail : success}
                    title2={rItem.name + ' | '}
                    title3={rItem.type}
                    title4={rItem.quantity}
                    style={{
                        title1: rItem.status === 0 ? getStyleStatusFail() : getStyleStatusSuccess(),
                        title2: getStyleNameItem(),
                        title4: getStyleQuantity()
                    }} />
            </TouchableOpacity>

        )
    }

    return (
        <View style={getStyleContainer()}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

            <AppHeader title='LỊCH SỬ GIAO DỊCH' style={{}} />

            <AppFlatList
                data={listItem}
                renderItem={renderItem}
                style={{
                    container: getStyleContainerFlatList()
                }} />


        </View>
    )
}

export default TransactionHistory

var listItem = [
    {
        _id: 0,
        status: 1,
        name: 'Spider Plant',
        type: 'Ưa bóng',
        quantity: 2,
        date: '03/09/2021'
    },
    {
        _id: 1,
        status: 0,
        name: 'Spider Plant',
        type: 'Ưa bóng',
        quantity: 2,
        date: '01/09/2021'

    },
]

var getStyleContainerItem = () => {
    return{
        ...Style.marginBottom30
    }
}

var getStyleContainerFlatList = () => {
    return {
        ...Style.paddingHorizontal24,
        ...Style.marginTop15px,
    }
}

var getStyleDate = () => {
    return {
        ...Style.fontSize16,
        ...Style.color221F1F,
        ...Style.borderBottomWidth05px,
        ...Style.borderBottomColor7D7B7B,
        ...Style.paddingBottom5px,
    }
}

var getStyleQuantity = () => {
    return {
        ...Style.color000000,
    }
}

var getStyleNameItem = () => {
    return {
        ...Style.fontSize16,
        ...Style.color000000,
    }
}

var getStyleStatusFail = () => {
    return{
        ...Style.fontSize16,
        ...Style.colorFF0000,
    }
}

var getStyleStatusSuccess = () => {
    return {
        ...Style.fontSize16,
        ...Style.color007537,
    }
}

var getStyleContainer = () => {
    return {
        ...Style.backgroundColorWhite,
        ...Style.paddingHorizontal24,
        ...Style.flex1,
    }
}