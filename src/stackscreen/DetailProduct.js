import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import AppHeader from '../commons/AppHeader'
import BodyDetailProduct from '../commons/BodyDetailProduct'
import WrapButtonChooseBuy from '../commons/WrapButtonChooseBuy'
import Style from '../style/AppStyle'
import AxiosInstance from '../helpers/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { userSlice } from '../redux/UserSlice'

const DetailProduct = (props) => {

    const id = props?.route?.params?._id;
    const { navigation } = props;

    const dispatch = useDispatch();
    const selector = useSelector((state) => state.user);

    const [product, setProduct] = useState(null);
    const [selectQuantity, setSelectQuantity] = useState(selector.quantity);
    const [totalPrice, setTotalPrice] = useState(0);

    const srcIconRight = require('../resouces/icon/cart.png');

    // Get product
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await AxiosInstance().get(`/products/${id}`);
                if (response.status == true) setProduct(response.data);
            } catch (error) {
                console.log('Error get product: ', error.message);
            }
        }
        getProduct();
    }, [id])


    const sumPrice = useMemo(() => (quantity, price) => {
        const sum = quantity * price;
        console.log('quantity: ', quantity, 'price: ', price, 'sum: ', sum);
        setTotalPrice(sum);
    }, [selectQuantity]);

    // Set price
    useEffect(() => {
        const setPrice = () => {
            if (product?.price) {
                sumPrice(selectQuantity, product?.price);
            }
        }
        setPrice();
    }, [selectQuantity]);

    const handleBack = async () => {
        await dispatch(userSlice.actions.setDefaultQuantity());
        navigation.goBack();
    }


    const handleMinus = () => {
        if (selectQuantity > 0) {
            dispatch(userSlice.actions.minusQuantity())
            setSelectQuantity(selector.quantity - 1);
        }
    }

    const handlePlus = () => {
        dispatch(userSlice.actions.plusQuantity())
        setSelectQuantity(selector.quantity + 1);
    }

    const handleAddCart = async () => {
        try {
            const userID = selector.user._id;
            console.log(product._id)
            const body = {
                idProduct: product._id,
                quantity: selectQuantity == 0 ? 1 : selectQuantity,
            }
            const result = await AxiosInstance().post(`/carts/user/${userID}`, body);
            if (result.status == true) {
                if (selectQuantity > 0) {
                    dispatch(userSlice.actions.setDefaultQuantity())
                    setSelectQuantity(0);
                    return navigation.navigate('Cart');
                } else {
                    return alert("Đã thêm vào giỏ hàng");
                }
            }

            return alert('Thêm giỏ hàng thất bại')
        } catch (error) {
            console.log('Add cart error: ', error.message);
        }
    }


    return (
        <View style={getStyleContainer()}>
            <StatusBar barStyle='dark-content' backgroundColor={'white'} />
            <AppHeader
                title={product?.name}
                srcIconRight={srcIconRight}
                onPressIconRight={handleAddCart}
                style={{
                    container: getStyleContainerHeader()
                }}
                onPressIconLeft={handleBack}
            />

            <BodyDetailProduct
                srcBanner={product?.image}
                role={product?.role}
                type={product?.type}
                price={product?.price.toFixed(3)}
                size={product?.size}
                brand={product?.brand}
                quantity={product?.quantity}
                style={{
                    containerBody: getStyleContainerBody()
                }}
            />

            <WrapButtonChooseBuy
                quantity={selectQuantity}
                price={totalPrice == 0 ? totalPrice : totalPrice.toFixed(3)}
                onPressMinus={handleMinus}
                onPressPlus={handlePlus}
                onPress={handleAddCart}
                style={{
                    containerWrapBtn: getStyleContainerWrapBtn(),
                }}
            />
        </View>
    )
}

export default DetailProduct

var getStyleContainerHeader = () => {
    return {
        ...Style.paddingHorizontal24,
        ...Style.paddingTop30px,
        ...Style.backgroundColorWhite,
    }
}

var getStyleContainerBody = () => {
    return {
        ...Style.flex1,
        ...Style.backgroundColorWhite,

    }
}

var getStyleContainer = () => {
    return {
        ...Style.flex1
    }
}

var getStyleContainerWrapBtn = () => {
    return {
        ...Style.paddingHorizontal24,
        ...Style.marginBottom15,
        ...Style.gap20,
        ...Style.backgroundColorWhite,

    }
}