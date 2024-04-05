import { View, TouchableOpacity, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../commons/AppHeader'
import Style from '../style/AppStyle'
import AppDoubleText from '../commons/AppDoubleText'
import AppButton from '../commons/AppButton'
import WrapTextInputDetailPayment from '../commons/WrapTextInputDetailPayment'
import { useDispatch, useSelector } from 'react-redux'
import WrapChooseShipFunc from '../commons/WrapChooseShipFunc'
import WrapChoosePayFunc from '../commons/WrapChoosePayFunc'
import AppFlatList from '../commons/AppFlatList'
import AppItemProductRow from '../commons/AppItemProductRow'
import AxiosInstance from '../helpers/AxiosInstance'

const srcIconGreenStick = require('../resouces/icon/check.png');

const Payment = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch();
    const selectorUser = useSelector(state => state.user);
    const selectorListPayment = useSelector(state => state.products);

    const [user, setUser] = useState(selectorUser.user);
    const [listPayment, setListPayment] = useState(selectorListPayment.listPayment);
    const [nameUser, setNameUser] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [address, setAddress] = useState(user?.address);
    const [phoneNumber, setPhoneNumber] = useState(user?.phone);
    const [priceShip, setPriceShip] = useState(0);
    const [sumPriceProduct, setSumPriceProduct] = useState(0);
    const [sumPrice, setSumPrice] = useState(0);
    const [selectShip, setSelectShip] = useState()
    const [selectPay, setSelectPay] = useState()
    const [canPay, setCanPay] = useState(false);

    useEffect(() => {
        const sumProduct = listPayment.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setSumPriceProduct(sumProduct);
        setSumPrice(sumPriceProduct + priceShip);

    }, [listPayment, priceShip])

    // check infomation to pay
    useEffect(() => {
        const checkInfomation = () => {

            if (nameUser == '' || email == '' || address == '' || phoneNumber == '' || selectShip == undefined || selectPay == undefined) {
                return setCanPay(false)
            } else {
                return setCanPay(true)
            }

        }
        checkInfomation();
    }, [nameUser, email, address, phoneNumber, selectShip, selectPay]);

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleChooseShip = (item) => {
        setPriceShip(item.price);
        setSelectShip(item._id);
    }

    const handleShoosePay = (item) => {
        setSelectPay(item._id);
    }

    const handlePay = async () => {
        try {
            const notificationData = {
                idUser: user._id,
                products: listPayment.map(item => ({ _id: item._id, quantity: item.quantity })),
                status: 0
            };

            const transactionData = {
                idUser: user._id,
                products: listPayment.map(item => ({ _id: item._id, quantity: item.quantity })),
                shipFunction: listShip.find(ship => ship._id === selectShip).name,
                payFunction: listCreditCard.find(pay => pay._id === selectPay).name,
                sumPrice: sumPrice
            };

            const resultNotify = await AxiosInstance().post('/notifications', notificationData);

            const resultTransaction = await AxiosInstance().post('/transactions', transactionData);
            if (resultNotify.status == true && resultTransaction.status == true) {
                if (user.name !== nameUser || user.email !== email || user.address !== address || user.phone !== phoneNumber) {
                    const body = {
                        _id: user._id,
                        name: nameUser,
                        email: email,
                        address: address,
                        phone: phoneNumber
                    }
                    const resultUpdate = await AxiosInstance().put(`/users/update`, body);
                    console.log(resultUpdate)
                    if (resultUpdate.status == true) {
                        const resultDeleteCart = await AxiosInstance().delete(`/carts/all/delete/${user._id}`);
                        if (resultDeleteCart.status == true) {
                            return navigation.navigate('Notification');
                        }
                    }
                }
            };

            // alert('Thanh toán thất bại');
        } catch (error) {
            console.error('Error creating notification and transaction:', error);
            // Xử lý lỗi (ví dụ: hiển thị thông báo lỗi, ...)
        }
    };

    const renderItem = (item) => {
        const rItem = item.item;
        return (
            <AppItemProductRow
                srcImg={{ uri: rItem.image }}
                title={rItem.name + ' | '}
                title1={rItem.type}
                title2={rItem.price.toFixed(3) + 'đ'}
                title4={rItem.quantity + ' sản phẩm'}
                style={{
                    title1: rItem.status === 0 ? getStyleStatusFail() : getStyleStatusSuccess(),
                    title2: getStyleNameItem(),
                    title4: getStyleQuantity()
                }} />
        )
    }

    const renderItemShip = (item) => {
        const rItem = item.item;

        return (
            <TouchableOpacity onPress={() => handleChooseShip(rItem)}>
                <AppDoubleText
                    textLeft={rItem.name + ' - ' + rItem.price.toFixed(3) + 'đ'}
                    textRight={rItem.content}
                    srcIcon={selectShip == rItem._id ? srcIconGreenStick : null}
                    style={{
                        container: getStyleContainerShip(),
                        icon: getStyleIconCheck(),
                        txtLeft: selectShip == rItem._id ? getStyleTxtFont16Green() : getStyleTxtFont16Black(),
                    }} />
            </TouchableOpacity>
        )
    }

    const renderItemPay = (item) => {
        const rItem = item.item;
        return (
            <TouchableOpacity onPress={() => handleShoosePay(rItem)}>
                <AppDoubleText
                    textLeft={rItem.name}
                    srcIcon={selectPay == rItem._id ? srcIconGreenStick : null}
                    style={{
                        container: getStyleContainerShip(),
                        icon: getStyleIconCheck(),
                        txtLeft: selectPay == rItem._id ? getStyleTxtFont16Green() : getStyleTxtFont16Black(),

                    }} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={getStyleContainer()}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <StatusBar barStyle='dark-content' backgroundColor={'white'} />
                        <AppHeader
                            title='THANH TOÁN'
                            onPressIconLeft={handleGoBack}
                            style={{}}
                        />
                        <View style={getStyleBody()}>

                            <WrapTextInputDetailPayment
                                title='Thông tin khách hàng'
                                value1={nameUser}
                                value2={email}
                                value3={address}
                                value4={phoneNumber}
                                setValue1={setNameUser}
                                setValue2={setEmail}
                                setValue3={setAddress}
                                setValue4={setPhoneNumber}
                            />

                            {/* Ship function  */}
                            <AppFlatList
                                title='Phương thức vận chuyển'
                                data={listShip}
                                renderItem={renderItemShip}
                                style={{
                                    title: getStyleLabel()
                                }} />

                            {/* Payment function  */}
                            <AppFlatList
                                title='PHình thức thanh toán'
                                data={listCreditCard}
                                renderItem={renderItemPay}
                                style={{
                                    title: getStyleLabel()
                                }} />


                            <AppFlatList
                                title='Đơn hàng đã chọn'
                                data={listPayment}
                                renderItem={renderItem}
                                style={{
                                    title: getStyleLabel()
                                }} />
                        </View>
                    </>
                }

            />

            <View style={getStyleContainerBottom()}>
                <View>
                    <AppDoubleText
                        textLeft='Tạm tính'
                        textRight={sumPriceProduct.toFixed(3) + 'đ'}
                        style={{
                            row: getStyleRowTxtBottom(),
                            txtRight: getStyleTxtFont16Black(),
                        }} />

                    <AppDoubleText
                        textLeft='Phí vận chuyển'
                        textRight={priceShip.toFixed(3) + 'đ'}
                        style={{
                            row: getStyleRowTxtBottom(),
                            txtRight: getStyleTxtFont16Black(),
                        }} />

                    <AppDoubleText
                        textLeft='Tổng cộng'
                        textRight={sumPrice.toFixed(3) + 'đ'}
                        style={{
                            row: getStyleRowTxtBottom(),
                            txtRight: getStyleTxtFont16Green(),
                            txtLeft: getStyleTxtFont16Black(),
                        }} />
                </View>

                <AppButton
                    title='TIẾP TỤC'
                    onPress={handlePay}
                    disabled={!canPay}
                    style={{
                        btn: canPay ? getStyleBtnClickAble() : getStyleBtn(),
                        txt: getStyleTxtInBtn()
                    }}
                />
            </View>

        </View>
    )
}

export default Payment

var listShip = [
    {
        _id: 0,
        name: 'Giao hàng nhanh',
        content: 'Dự kiến giao hàng 5-7 ngày',
        price: 15
    },
    {
        _id: 1,
        name: 'Giao hàng COD',
        content: 'Dự kiến giao hàng 3-5 ngày',
        price: 20
    }

]

var listCreditCard = [
    {
        _id: 0,
        name: 'Thẻ VISA/MASTERCARD',
    },
    {
        _id: 1,
        name: 'Thẻ ATM',
    }
]

var getStyleBtnClickAble = () => {
    return {
        ...Style.borderRadius8px,
        ...Style.height50px,
        ...Style.backgroundColor007537,
        ...Style.justifyContentCenter,
        ...Style.alignItemsCenter,
    }
}

var getStyleNameItem = () => {
    return {
        ...Style.fontSize16,
        ...Style.color000000,
    }
}


var getStyleQuantity = () => {
    return {
        ...Style.color000000,
    }
}


var getStyleStatusFail = () => {
    return {
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

var getStyleContainerBottom = () => {
    return {
        ...Style.marginBottom15,
        ...Style.gap20,
        ...Style.backgroundColorWhite,
    }
}

var getStyleTxtInBtn = () => {
    return {
        ...Style.fontSize16,
        ...Style.colorWhite
    }
}

var getStyleBtn = () => {
    return {
        ...Style.height50px,
        ...Style.borderRadius8px,
        ...Style.backgroundColorABABAB,
        ...Style.justifyContentCenter,
        ...Style.alignItemsCenter,
    }
}

var getStyleRowTxtBottom = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
    }
}

var getStyleTxtFont16Green = () => {
    return {
        ...Style.fontSize16,
        ...Style.color007537
    }
}

var getStyleTxtFont16Black = () => {
    return {
        ...Style.fontSize16,
        ...Style.color000000
    }
}

var getStyleIconCheck = () => {
    return {
        ...Style.sizeIcon24px
    }
}

var getStyleContainerShip = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
        ...Style.alignItemsCenter,
        ...Style.marginTop15px,
    }
}

var getStyleLabel = () => {
    return {
        ...Style.fontSize18,
        ...Style.color221F1F,
        ...Style.borderBottomWidth05px,
        ...Style.borderBottomColor221F1F,
        ...Style.paddingBottom5px,
    }
}

var getStyleBody = () => {
    return {
        ...Style.flex1,
        ...Style.paddingHorizontal24,
        ...Style.paddingVertical17px,
        ...Style.gap20,
    }
}



var getStyleContainer = () => {
    return {
        ...Style.flex1,
        ...Style.paddingHorizontal24,
        ...Style.backgroundColorWhite,
    }
}