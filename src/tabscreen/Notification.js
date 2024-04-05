import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../commons/AppHeader'
import Style from '../style/AppStyle'
import AppItemProductRow from '../commons/AppItemProductRow'
import AppFlatList from '../commons/AppFlatList'
import AxiosInstance from '../helpers/AxiosInstance'
import { useSelector } from 'react-redux'
import moment from 'moment'

const Notification = () => {

  const selector = useSelector(state => state.user);
  const user = selector.user;
  const [notifications, setNotifications] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notificationResult = await AxiosInstance().get(`/notifications/idUser/${user._id}`);
        if (notificationResult.status === true) {
          setNotifications(notificationResult.data);

          const pdOfNotify = notificationResult.data.flatMap(item => item.products);
          const productIds = pdOfNotify.map(product => product._id);
          let tempArr = [];

          // Fetch data for each product
          for (let i = 0; i < productIds.length; i++) {
            const productResult = await AxiosInstance().get(`/products/${productIds[i]}`);
            if (productResult.status === true) {
              tempArr.push(productResult.data);
            }
          }
          // Use spread operator update quantity
          if (tempArr.length > 0) {
            for (let i = 0; i < tempArr.length; i++) {
              for (let j = 0; j < pdOfNotify.length; j++) {
                if (tempArr[i]._id === pdOfNotify[j]._id) {
                  tempArr[i].quantity = pdOfNotify[j].quantity
                }
              }
            }
            setProducts(tempArr);
          }
        }
      } catch (error) {
        console.log('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  }
  const renderItem = (item) => {
    const rItem = item.item;
    const pdOfItem = rItem.products;
    const status = rItem.status == 0 ? 'Đặt hàng thành công' : 'Đã hủy đơn hàng';
    const date = moment(rItem.createdAt).format('DD/MM/YYYY');
    const dayOfWeek = moment(rItem.createdAt).format('dddd');

    let rProduct = [];
    for (let i = 0; i < pdOfItem.length; i++) {
      const product = products.find(product => product._id === pdOfItem[i]._id);
      if (product) rProduct.push(product);
    }
    return (
      <TouchableOpacity style={getStyleContainerItem()}>
        <Text style={getStyleDate()}>{dayOfWeek + ', ' + date}</Text>

        {rProduct.map((item, index) => {
          return (
            <View key={index}>
              <AppItemProductRow
                srcImg={{ uri: item.image }}
                title1={status}
                title2={item.name + ' | '}
                title3={item.type}
                title4={item.quantity + ' sản phẩm'}
                style={{
                  title1: status === 'Đặt hàng thành công' ? getStyleStatusSuccess() : getStyleStatusFail(),
                  title2: getStyleNameItem(),
                  title4: getStyleQuantity()
                }} />
            </View>
          )
        })}
      </TouchableOpacity>

    )
  }

  return (
    <View style={getStyleContainer()}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <AppHeader
        title={'THÔNG BÁO'}
        onPressIconLeft={handleBack}
        style={{}} />
      {!products && <Text style={getStyleTxtNotify()}>Hiện chưa có thông báo nào cho bạn</Text>}

      <AppFlatList
        data={notifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))}
        renderItem={renderItem}
        style={{
          container: getStyleContainerFlatList()
        }} />

    </View >
  )
}

export default Notification


var getStyleTxtNotify = () => {
  return {
    ...Style.textAlignCenter,
    ...Style.color000000,

  }
}

var getStyleContainer = () => {
  return {
    ...Style.paddingHorizontal24,
    ...Style.backgroundColorWhite,
    ...Style.flex1,
  }
}

var getStyleContainerFlatList = () => {
  return {
    ...Style.paddingHorizontal24,
    ...Style.marginTop15px,
    ...Style.flex1,
  }
}

var getStyleContainerItem = () => {
  return {
    ...Style.marginBottom30
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



