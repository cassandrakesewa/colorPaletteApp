import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ColorPalette from './Screens/ColorPalette';
import Home from './Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewColorPaletteModal from './Screens/AddNewColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator presentation="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={AddNewColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
