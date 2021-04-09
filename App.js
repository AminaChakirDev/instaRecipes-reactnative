import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from "./Components/Home";
import Recipe from "./Components/Recipe";
import Logo from "./Components/Logo"
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { elevation: 0, shadowColor: 'transparent' },
          cardStyle: { background: '#fff' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTitle: props => <Logo {...props} />,
            headerBackTitle: ' '
          }}
        />
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{
          headerShown: true,
          headerTitle: props => <Logo {...props} />,
          headerBackTitle: ' '
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
