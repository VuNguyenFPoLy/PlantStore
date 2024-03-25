import React from 'react';
import {
  View,
} from 'react-native';
import AppStyle from './src/style/AppStyle';
import ScreenNavigation from './src/ScreenNavigation';
import { NavigationContainer } from '@react-navigation/native';
import DetailProduct from './src/stackscreen/DetailProduct';
import AppModal from './src/commons/AppModal';


function App(): React.JSX.Element {


  return (
    <View style={{ ...AppStyle.flex1 }}>
      <NavigationContainer>
        <ScreenNavigation />
        {/* <AppModal
          title={'Đây là tiêu đề'}
          content={'Đây là nội dung'}
          resolveContent={'Đồng ý'}
          rejectContent={'Huỷ'}
        /> */}
      </NavigationContainer>
    </View>
  );
}


export default App;
