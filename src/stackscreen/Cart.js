import { View, Text, StatusBar } from 'react-native'
import React, {useState} from 'react'
import AppHeader from '../commons/AppHeader';
import Style from '../style/AppStyle';
import AppDoubleText from '../commons/AppDoubleText';
import AppItemProductRow from '../commons/AppItemProductRow';
import AppButton from '../commons/AppButton';

const Cart = (props) => {
    StatusBar.setHidden(false);
    const {navigation} = props;

    const [selectItem, setSelectItem] = useState(false);

    const srcIconLeft = require('../resouces/icon/arrowLeft.png');
    const srcIconRight = require('../resouces/icon/trash.png');
    const srcIconCheckBox = require('../resouces/icon/checkBox.png');
    const srcIconCheckBoxFill = require('../resouces/icon/checkBoxFill.png');

    const handleGoBack = () => {
        navigation.goBack();
    }


    return (
        <View style={getStyleContainer()}>
            <AppHeader
                title={'GIỎ HÀNG'}
                srcIconLeft={srcIconLeft}
                srcIconRight={srcIconRight}
                onPressIconLeft={handleGoBack}
                style={{}}
            />

            <AppDoubleText
                textLeft={'Giỏ hàng của bạn hiện đang trống'}
                style={{
                    txtLeft: getStyleTxtEmty()
                }}
            />

            <AppItemProductRow
                price='Spider Plant | '
                type='Ưa bóng'
                quantity='250.000đ'
                number={1}
                srcIconLeft={srcIconCheckBox}
                style={{
                    txtPrice: getStyleName(),
                    txtQuantity: getStyleTxtPrice()
                }}
            />

            <View>
                <AppDoubleText 
                textLeft={'Tạm tính'}
                textRight={'500.000đ'}
                style={{
                    row: getStyleRowLabelBottom(),
                    txtRight: getStyleBottomPrice()
                }}
                />
                <AppButton 
                title={'Tiến hành thanh toán'}
                style={{
                    btn: getStyleBtn(),
                    txt: getStyleTxtInBtn()
                }}
                />
            </View>
        </View>
    )
}

export default Cart

var getStyleTxtInBtn = () => {
    return{
        ...Style.fontSize18,
        ...Style.colorWhite,
        ...Style.fontFamilyLatoRegular,

    }
}

var getStyleBtn = () => {
    return{
        ...Style.borderRadius8px,
        ...Style.height50px,
        ...Style.backgroundColor007537,
        ...Style.justifyContentCenter,
        ...Style.alignItemsCenter,
    }
}

var getStyleBottomPrice = () => {
    return{
        ...Style.fontSize16,
        ...Style.fontFamilyLatoRegular,
        ...Style.color000000,

    }
}

var getStyleRowLabelBottom = () => {
    return{
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
    }
}

var getStyleTxtPrice = () => {
    return{
        ...Style.fontSize16,
        ...Style.fontFamilyLatoRegular,
        ...Style.color007537
    }
}

var getStyleName = () => {
    return{
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