import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//////////////////Components///////////////////
import HomeScreen from './navigation/tabNavigation/HomeScreen';
import Signin from './giphy-images/signin/Signin';
import MoreDetails from './giphy-images/homePage/MoreDetails';

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          gestureEnabled: true,
          headerBackButtonMenuEnabled: false,
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
