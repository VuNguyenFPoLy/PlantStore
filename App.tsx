import React from 'react';
import {
  View,
} from 'react-native';
import AppStyle from './src/assets/style/AppStyle';
import Login from './src/assets/authen/Login';
import Register from './src/assets/authen/Register';
import Home from './src/assets/tabscreen/Home';

function App(): React.JSX.Element {


  return (
    <View style={{ ...AppStyle.flex1 }}>
      {/* <Login /> */}
      {/* <Register /> */}
      <Home />
    </View>
  );
}


export default App;
