import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from "./Components/Home";
import Recipe from "./Components/Recipe";
import Logo from "./Components/Logo"
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './Components/Favorites';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { elevation: 0, shadowColor: 'transparent' },
        cardStyle: { background: '#fff' },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: props => <Logo {...props} />,
          headerBackTitle: ' '
        }}
      />
      <HomeStack.Screen
        name="Recipe"
        component={Recipe}
        options={{
          headerShown: true,
          headerTitle: props => <Logo {...props} />,
          headerBackTitle: ' '
        }}
      />
    </HomeStack.Navigator>
  );
}


const FavoritesStack = createStackNavigator();

function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerStyle: { elevation: 0, shadowColor: 'transparent' },
        cardStyle: { background: '#fff' },
      }}
    >
      <FavoritesStack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: true,
          headerTitle: props => <Logo {...props} />,
          headerBackTitle: ' '
        }}
      />
    </FavoritesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}