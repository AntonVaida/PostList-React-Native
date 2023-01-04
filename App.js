import React from 'react';
import { Navigation } from './navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './store/store';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $textColor: '#fff',
  $backgroundColorAlert: '#5F9EA0',
  $borderColor: '#0000FF',
  $backgroundColor: '#B0C4DE',
  $textColorBlack: '#000',
});

const App = () => {
  return (
    <Provider store={store} >
      <Navigation />
    </Provider>
  );
};


export default App;
