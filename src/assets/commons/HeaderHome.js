import { Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderHome = () => {
    return (
        <View>
            <StatusBar backgroundColor={'#F6F6F6'} barStyle="dark-content" />

            <View>
                <View style={styles.rowCart}>
                    <Text style={styles.txtHeader}>Planta - toả sáng</Text>
                    <Image style={styles.sizeIconCart} source={require('../resouces/icon/circleCart.png')} />
                </View>

                <ImageBackground style={styles.sizeHeaderImg} source={require('../resouces/image/headerHome.png')} >
                    <Text style={styles.txtHeader}>không gian nhà bạn</Text>
                    <Pressable style={styles.rowViewNewProduct}>
                        <Text style={styles.greenTxt}>Xem hàng mới về</Text>
                        <Image style={styles.sizeArrowRight} source={require('../resouces/icon/greenArrowRight.png')} />
                    </Pressable>
                </ImageBackground>
            </View>

        </View>
    )
}

export default HeaderHome

const styles = StyleSheet.create({
    sizeHeaderImg: {
        height: 200,
    },
    txtHeader: {
        fontSize: 24,
        color: 'black',
        width: 223
    },
    sizeIconCart: {
        width: 48,
        height: 46
    },
    rowCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F6F6F6',
        paddingTop: 24
    },
    rowViewNewProduct: {
        flexDirection: 'row'
    },
    sizeArrowRight: {
        width: 24,
        height: 24
    },
    greenTxt: {
        color: '#007537',
        fontSize: 16,
        fontWeight: '500'
    }
})