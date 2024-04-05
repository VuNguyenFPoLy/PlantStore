import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect, memo } from 'react'
import AppHeader from '../commons/AppHeader';
import Style from '../style/AppStyle';
import AppDoubleText from '../commons/AppDoubleText';
import AppItemProductRow from '../commons/AppItemProductRow';
import AppButton from '../commons/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import AppFlatList from '../commons/AppFlatList';
import AxiosInstance from '../helpers/AxiosInstance';
import { setListPaymentAction } from '../redux/products/ProductSlice';
const Cart = memo((props) => {
    StatusBar.setHidden(false);
    const { navigation } = props;

    const dispatch = useDispatch();
    const selectProducts = useSelector(state => state.products);
    const selectUser = useSelector(state => state.user);

    const srcIconLeft = require('../resouces/icon/arrowLeft.png');
    const srcIconRight = require('../resouces/icon/trash.png');
    const srcIconCheckBox = require('../resouces/icon/checkBox.png');
    const srcIconCheckBoxFill = require('../resouces/icon/checkBoxFill.png');

    const [carts, setCarts] = useState([]);
    const [user, setUser] = useState(selectUser.user);
    const [products, setProducts] = useState(selectProducts.products);
    const [productsOfCarts, setproductsOfCarts] = useState([]);
    const [listPayment, setListPayment] = useState([])
    const [sumPrice, setSumPrice] = useState(0);


    // get carts 
    useEffect(() => {
        const getCart = async () => {
            try {
                const response = await AxiosInstance().get(`/carts/user/${user._id}`);
                if (response.status === true) {
                    setCarts(response.data);
                    const filterProductsOfCart = () => {
                        let arrTemp = [];
                        for (let i = 0; i < response.data.length; i++) {
                            const product = products.find(item => item._id === response.data[i].idProduct);
                            if (product) {
                                const updatedProduct = { ...product, isChecked: false };
                                updatedProduct.quantity = response.data[i].quantity;
                                arrTemp.push(updatedProduct);
                            }
                        }
                        setproductsOfCarts(arrTemp);
                    }
                    filterProductsOfCart();
                }
            } catch (error) {
                console.log('Get carts error: ', error.message);
            }
        }
        getCart();
    }, []);

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handlePressPlus = (item) => {
        const mapCarts = [...productsOfCarts];
        const index = mapCarts.indexOf(item);
        mapCarts[index].quantity += 1;
        if (item.isChecked) setSumPrice(sumPrice + item.price);
        setproductsOfCarts([...mapCarts]);
    }

    const handlePressMinus = (item) => {
        const mapCarts = [...productsOfCarts];
        const index = mapCarts.indexOf(item);
        if (mapCarts[index].quantity == 1) return;
        mapCarts[index].quantity -= 1;
        if (item.isChecked) setSumPrice(sumPrice - item.price);
        setproductsOfCarts([...mapCarts]);
    }

    const handleChooseItem = (item) => {
        const mapCarts = [...productsOfCarts];
        const index = mapCarts.indexOf(item);
        const tempPaymentList = [...listPayment];


        if (item.isChecked == false) {
            mapCarts[index].isChecked = true;

            tempPaymentList.push(item);

            setSumPrice(sumPrice + item.price * item.quantity);
            setproductsOfCarts([...mapCarts]);
            setListPayment([...tempPaymentList]);
        } else {
            mapCarts[index].isChecked = false;
            tempPaymentList.splice(tempPaymentList.indexOf(item), 1);

            setSumPrice(sumPrice - item.price * item.quantity);
            setproductsOfCarts([...mapCarts]);
            setListPayment([...tempPaymentList]);
        }
    }

    // delete one
    const handleDeleteItem = async (item) => {
        try {
            const index = item.index;
            const userID = user._id;
            const cartID = carts[index]._id;

            const result = await AxiosInstance().delete(`carts/delete/${userID}/${cartID}`);
            if (result) {
                const updateCarts = [...carts];
                updateCarts.splice(index, 1);
                setCarts([...updateCarts]);
                alert('Xóa thành công')
            };
            return null;
        } catch (error) {
            console.log('Delete one item error: ', error.message);
        }
    }

    // delete all
    const handleDeleteAllItem = async () => {
        try {
            console.log(user._id)
            const result = await AxiosInstance().delete(`carts/all/delete/${user._id}`);
            if (result) {
                setCarts([]);
                setproductsOfCarts([]);
                alert('Đã xóa toàn bộ')
            };
            return null;
        } catch (error) {
            console.log('Delete all item error: ', error.message);
        }
    }
    const handlePayment = async () => {
        const length = listPayment.length;
        await dispatch(setListPaymentAction(listPayment));
        navigation.navigate('Payment');
    }



    const renderItem = (item) => {
        const rItem = item.item;
        return (
            <AppItemProductRow
                srcImg={{ uri: rItem.image }}
                title2={rItem.name + ' | '}
                title3={rItem.type}
                title4={rItem.price.toFixed(3) + 'đ'}
                number={rItem.quantity}
                onPressPlus={() => handlePressPlus(rItem)}
                onPressMinus={() => handlePressMinus(rItem)}
                onPressDelete={() => handleDeleteItem(item)}
                onPressIcon={() => handleChooseItem(rItem)}
                srcIconLeft={rItem.isChecked ? srcIconCheckBoxFill : srcIconCheckBox}
                style={{
                    title2: getStyleName(),
                    title4: getStyleTxtPrice()
                }
                }
            />
        )
    }


    return (
        <View style={getStyleContainer()}>
            <AppHeader
                title={'GIỎ HÀNG'}
                srcIconLeft={srcIconLeft}
                srcIconRight={srcIconRight}
                onPressIconLeft={handleGoBack}
                onPressIconRight={handleDeleteAllItem}
                style={{}}
            />

            <AppDoubleText
                textLeft={productsOfCarts.length > 0 ? null : 'Giỏ hàng của bạn hiện đang trống'}
                style={{
                    txtLeft: getStyleTxtEmty()
                }}
            />

            <AppFlatList
                data={productsOfCarts}
                renderItem={renderItem}
                numColumn={1}
                style={{
                    container: getStyleFlatList()
                }} />

            <View style={getStyleContainerBottom()}>
                <AppDoubleText
                    textLeft={'Tạm tính'}
                    textRight={sumPrice == 0 ? '0đ' : sumPrice.toFixed(3) + 'đ'}
                    style={{
                        row: getStyleRowLabelBottom(),
                        txtRight: getStyleBottomPrice()
                    }}
                />
                <AppButton
                    onPress={handlePayment}
                    title={'Tiến hành thanh toán'}
                    disabled={sumPrice == 0}
                    style={{
                        btn: sumPrice == 0 ? getStyleBtn() : getStyleBtnClickAble(),
                        txt: getStyleTxtInBtn()
                    }}
                />
            </View>
        </View>
    )
})

export default Cart

var getStyleBtn = () => {
    return {
        ...Style.height50px,
        ...Style.borderRadius8px,
        ...Style.backgroundColorABABAB,
        ...Style.alignItemsCenter,
        ...Style.justifyContentCenter,
    }
}

var getStyleContainerBottom = () => {
    return {
        ...Style.marginBottom15,
        ...Style.gap20
    }
}

var getStyleFlatList = () => {
    return {
        ...Style.flex1
    }
}

var getStyleTxtInBtn = () => {
    return {
        ...Style.fontSize18,
        ...Style.colorWhite,
        ...Style.fontFamilyLatoRegular,

    }
}

var getStyleBtnClickAble = () => {
    return {
        ...Style.borderRadius8px,
        ...Style.height50px,
        ...Style.backgroundColor007537,
        ...Style.justifyContentCenter,
        ...Style.alignItemsCenter,
    }
}

var getStyleBottomPrice = () => {
    return {
        ...Style.fontSize18,
        ...Style.fontFamilyLatoRegular,
        ...Style.color000000,

    }
}

var getStyleRowLabelBottom = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
    }
}

var getStyleTxtPrice = () => {
    return {
        ...Style.fontSize16,
        ...Style.fontFamilyLatoRegular,
        ...Style.color007537
    }
}

var getStyleName = () => {
    return {
        ...Style.fontSize16,
        ...Style.color000000,
        ...Style.fontFamilyLatoRegular
    }
}

var getStyleTxtEmty = () => {
    return {
        ...Style.textAlignCenter,
        ...Style.color000000,
        ...Style.fontSize16,
        ...Style.fontFamilyLatoRegular,
    }
}

var getStyleContainer = () => {
    return {
        ...Style.flex1,
        ...Style.backgroundColorWhite,
        ...Style.paddingHorizontal24
    }
}