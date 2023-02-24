import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//////////////////Components///////////////////
import GiphyScreens from '../stacknavigation/GiphyScreens';
import Favorite from '../../giphy-images/homePage/Favorite';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={GiphyScreens}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
// screenOptions={({route}) => ({
//   tabBarIcon: ({focused, color, size}) => {
//     let iconName;

//     if (route.name === 'Home') {
//       iconName = focused ? 'home' : 'home-outline';
//     } else if (route.name === 'Favorite') {
//       iconName = focused ? 'person' : 'person-outline';
//     }

//     return <Ionicons name={iconName} size={size} color={color} />;
//   },
// })}
// tabBarOptions={{
//   activeTintColor: '#e91e63',
//   inactiveTintColor: 'gray',
// }}

export default HomeScreen;
