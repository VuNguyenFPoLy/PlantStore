import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import AppHeader from '../commons/AppHeader'
import BodyDetailProduct from '../commons/BodyDetailProduct'
import WrapButtonChooseBuy from '../commons/WrapButtonChooseBuy'
import Style from '../style/AppStyle'

const DetailProduct = (props) => {

    const { navigation } = props;

    const srcIconLeft = require('../resouces/icon/arrowLeft.png');
    const srcIconRight = require('../resouces/icon/cart.png');

    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <View style={getStyleContainer()}>
            <AppHeader
                title={'Spider Plant'}
                srcIconLeft={srcIconLeft}
                srcIconRight={srcIconRight}
                style={{
                    container: getStyleContainerHeader()
                }}
                onPressIconLeft={handleBack}
            />

            <BodyDetailProduct
                style={{
                    containerBody: getStyleContainerBody()
                }}
            />

            <WrapButtonChooseBuy
                quantity={0}
                price={'250.000đ'}
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
        ...Style.marginTop30px,
    }
}

var getStyleContainerBody = () => {
    return {
        ...Style.flex1

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

    }
}