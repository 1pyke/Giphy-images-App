import React from 'react';
import Index from './src/Index';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import giphyImagesStore from './src/giphy-images/giphy-images-store';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
const store = configureStore({
  reducer: {
    giphyImagesStore,
  },
});
const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
