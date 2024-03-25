import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle'
import AppItemQA from '../commons/AppItemQA'
import AppHeader from '../commons/AppHeader'

const QA = () => {

  const srcIconArrowUp = require('../resouces/icon/arrowUp.png');
  const srcIconArrowDown = require('../resouces/icon/arrowDown.png');

  return (
    <View style={getStyleContainer()}>
      <StatusBar barStyle='dark-content' backgroundColor={'white'} />
      <AppHeader
        title='Q & A'
        style={{}} />

      <AppItemQA
        title1='Tôi trộn các chất dinh dưỡng theo thứ tự nào?'
        title2='A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.'
        srcIcon={srcIconArrowDown}
        style={{
          row: getStyleRowInItem(),
          icon: getStyleSizeIconItem(),
          title1: getStyleTxtQuestion(),
          title2: getStyleAnswer(),
          container: getStyleContainerItem()
        }} />
    </View>
  )
}

export default QA

var getStyleAnswer = () => {
  return{
    ...Style.fontSize16,
  }
}

var getStyleContainerItem = () => {
  return{
    ...Style.paddingHorizontal24,
    ...Style.gap20,
  }
}

var getStyleTxtQuestion = () => {
  return{
    ...Style.fontSize16,
    ...Style.color000000
  }
}

var getStyleContainer = () => {
  return{
    ...Style.flex1,
    ...Style.paddingHorizontal24,
    ...Style.backgroundColorWhite,
  }
}

var getStyleSizeIconItem = () => {
  return {
    ...Style.sizeIcon24px
  }
}

var getStyleRowInItem = () => {
  return {
    ...Style.flexDirectionRow,
    ...Style.justifyContentSpaceBetween,
    ...Style.alignItemsCenter,
  }
}

