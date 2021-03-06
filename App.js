import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Components/Home";
import Recipe from "./Components/Recipe";
import Logo from "./Components/Logo"
import Favorites from './Components/Favorites';
import MyAccount from './Components/MyAccount';
import Search from './Components/Search';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';


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

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: { elevation: 0, shadowColor: 'transparent' },
        cardStyle: { background: '#fff' },
      }}
    >
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: true,
          headerTitle: props => <Logo {...props} />,
          headerBackTitle: ' '
        }}
      />
    </SearchStack.Navigator>
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


const MyAccountStack = createStackNavigator();

function MyAccountStackScreen() {
  return (
    <MyAccountStack.Navigator
      initialRouteName="MyAccount"
      screenOptions={{
        headerStyle: { elevation: 0, shadowColor: 'transparent' },
        cardStyle: { background: '#fff' },
      }}
    >
      <MyAccountStack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          headerShown: true,
          headerTitle: props => <Logo {...props} />,
          headerBackTitle: ' '
        }}
      />
    </MyAccountStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused
                  ? 'home'
                  : 'home';
                break;

              case 'Search':
                iconName = focused
                  ? 'search'
                  : 'search';
                break;

              case 'Favorites':
                iconName = focused
                  ? 'heart'
                  : 'heart-o';
                break;

              case 'MyAccount':
                iconName = focused
                  ? 'user'
                  : 'user';
                break;

              default:
                'home'
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF3453',
          activeBackgroundColor: '#FFFFFF',
          inactiveTintColor: '#2c001b',
          inactiveBackgroundColor: '#FFFFFF',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
        <Tab.Screen name="MyAccount" component={MyAccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}