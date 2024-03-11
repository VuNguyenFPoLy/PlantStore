import React from 'react';
import {
  View,
} from 'react-native';
import AppStyle from './src/assets/style/AppStyle';
import ScreenNavigation from './src/assets/ScreenNavigation';
import { NavigationContainer } from '@react-navigation/native';

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
