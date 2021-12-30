import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; //import icon from 'react-native-vector-icons/FontAwesome';, FontAwesome bisa diganti
import Login from './src/pages/Login';
import MenuLogin from './src/pages/MenuLogin';
import MenuKomik from './src/pages/MenuKomik';
import MenuLatest from './src/pages/MenuLatest';
import MenuDeskripsi from './src/pages/MenuDeskripsi';
import MenuBaca from './src/pages/MenuBaca';
import MenuFavorite from './src/pages/MenuFavorite';
import MenuRecent from './src/pages/MenuRecent';
import MenuDownload from './src/pages/MenuDownload';
import MenuAccount from './src/pages/MenuAccount';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

test;
test2;

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuLogin"
          component={MenuLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuKomik"
          component={MenuKomik}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
