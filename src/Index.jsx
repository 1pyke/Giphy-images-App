import React from 'react';
import HomeScreen from './navigation/tabNavigation/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './giphy-images/signin/Signin';
import MoreDetails from './giphy-images/homePage/MoreDetails';
// import GiphyScreens from './navigation/stacknavigation/GiphyScreens';
const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          gestureEnabled: true,
          headerBackButtonMenuEnabled: false,
          // headerShown: false,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Signin"
          component={Signin}
        />
        <Stack.Group>
          <Stack.Screen
            options={{headerShown: false}}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{animation: 'slide_from_bottom'}}
            name="MoreDetails"
            component={MoreDetails}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
