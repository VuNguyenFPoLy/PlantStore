import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppDoubleText from './AppDoubleText'
import Style from '../style/AppStyle'
import BannerProduct from './BannerProduct'

const BodyDetailProduct = (props) => {
    const { srcBanner, style, role, type, price, size, brand, quantity } = props;

    const filterRole = (role) => {
        switch (role) {
            case 1:
                return 'Cây trồng'
                break;

            case 2:
                return 'Chậu cây'
                break;
            case 1:
                return 'Dụng cụ'
                break;
        }
    }

    return (
        <View style={style.containerBody}>

            <BannerProduct
                srcBanner={srcBanner}
            />

            <View style={getStyleContainer()}>
                <View style={getStyleRowType()}>
                    <Text style={getStyleTxtType()}>{filterRole(role)}</Text>
                    <Text style={getStyleTxtType()}>{type}</Text>
                </View>

                <View>
                    <Text style={getStyleTxtPrice()}>{price}</Text>
                    <Text style={getStyleLabelDetail()}>Chi tiết sản phẩm </Text>

                    <AppDoubleText
                        textLeft='Kích cỡ'
                        textRight={size}
                        style={{
                            row: getStyleTxtDetail(),
                            txtLeft: getStyleLeftRightDetail(),
                            txtRight: getStyleLeftRightDetail(),
                        }}
                    />

                    <AppDoubleText
                        textLeft='Xuất xứ'
                        textRight={brand}
                        style={{
                            row: getStyleTxtDetail(),
                            txtLeft: getStyleLeftRightDetail(),
                            txtRight: getStyleLeftRightDetail(),
                        }}
                    />

                    <AppDoubleText
                        textLeft='Tình trạng'
                        textRight={`Còn ${quantity} sp`}
                        style={{
                            row: getStyleTxtDetail(),
                            txtLeft: getStyleLeftRightDetail(),
                            txtRight: getStyleGreenText(),
                        }}
                    />
                </View>



            </View>

        </View>
    )
}

export default BodyDetailProduct



var getStyleTxtType = () => {
    return {
        ...Style.fontSize16,
        ...Style.colorWhite,
        ...Style.fontFamilyLatoRegular,
        ...Style.backgroundColor00924,
        ...Style.paddingVertical4,
        ...Style.paddingHorizontal8px,
        ...Style.borderRadius4px,
    }
}

var getStyleRowType = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.gap8,
        ...Style.marginVertical15
    }
}

var getStyleContainer = () => {
    return {
        ...Style.paddingHorizontal48
    }
}

var getStyleTxtPrice = () => {
    return {
        ...Style.fontSize24,
        ...Style.fontFamilyLatoRegular,
        ...Style.color007537,
    }
}

var getStyleLabelDetail = () => {
    return {
        ...Style.fontSize18,
        ...Style.color3A3A3A,
        ...Style.borderBottomColor221F1F,
        ...Style.borderBottomWidth1px,
        ...Style.paddingBottom5px,
        ...Style.marginTop15px,
    }
}

var getStyleGreenText = () => {
    return {
        ...Style.fontFamilyLatoRegular,
        ...Style.color007537,
    }
}

var getStyleLeftRightDetail = () => {
    return {
        ...Style.fontFamilyLatoRegular,
        ...Style.color3A3A3A,
        ...Style.fontSize16,
    }
}

var getStyleTxtDetail = () => {
    return {
        ...Style.flexDirectionRow,
        ...Style.justifyContentSpaceBetween,
        ...Style.borderBottomColorABABAB,
        ...Style.borderBottomWidth1px,
        ...Style.paddingBottom5px,
        ...Style.marginTop20px,
    }
}
