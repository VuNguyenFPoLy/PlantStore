import React from 'react';
import {
  View,
} from 'react-native';
import AppStyle from './src/style/AppStyle';
import ScreenNavigation from './src/ScreenNavigation';
import { NavigationContainer } from '@react-navigation/native';
import DetailProduct from './src/stackscreen/DetailProduct';


function App(): React.JSX.Element {


  return (
    <View style={{ ...AppStyle.flex1 }}>
      <NavigationContainer>
        <ScreenNavigation />
      </NavigationContainer>
    </View>
  );
}


export default App;
