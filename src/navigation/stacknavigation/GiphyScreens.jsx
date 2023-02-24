import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Components
import Images from '../../giphy-images/homePage/Images';
import Favorite from '../../giphy-images/homePage/Favorite';
const Stack = createNativeStackNavigator();
const GiphyScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        gestureEnabled: true,
        headerBackButtonMenuEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name="Images" component={Images} />
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
};

export default GiphyScreens;
