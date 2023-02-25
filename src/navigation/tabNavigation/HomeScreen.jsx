import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Text} from 'react-native';

//////////////////Components///////////////////
import Images from '../../giphy-images/homePage/Images';
import Favorite from '../../giphy-images/homePage/Favorite';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchForImage from '../../giphy-images/homePage/SearchForImage';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'SearchForImage') {
            iconName = focused ? 'search' : 'search-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ff5c96',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Images}
        options={{
          headerTitle: () => (
            <View style={styles.header}>
              <Text style={styles.headerText}>GIPHY Images</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchForImage"
        component={SearchForImage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        options={{
          headerTitle: () => (
            <View style={styles.header}>
              <Text style={styles.headerText}>My Favorites</Text>
            </View>
          ),
        }}
        name="Favorite"
        component={Favorite}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
