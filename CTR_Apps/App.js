import React from 'react';
import {Button, Text, View, color} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; //import icon from 'react-native-vector-icons/FontAwesome';, FontAwesome bisa diganti
import Login from './src/pages/Login';
import MenuLogin from './src/pages/MenuLogin';
import MenuHome from './src/pages/MenuHome';
import MenuLatest from './src/pages/MenuLatest';
import MenuDeskripsi from './src/pages/MenuDeskripsi';
import MenuBaca from './src/pages/MenuBaca';
import MenuFavorite from './src/pages/MenuFavorite';
import MenuRecent from './src/pages/MenuRecent';
import MenuDownload from './src/pages/MenuDownload';
import MenuAccount from './src/pages/MenuAccount';
import SplashScreen from './src/pages/SplashScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
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
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuLatest"
          component={MenuLatest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuDeskripsi"
          component={MenuDeskripsi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuAccount"
          component={MenuAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuRecent"
          component={MenuRecent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuFavorite"
          component={MenuFavorite}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MenuHome"
      screenOptions={{tabBarActiveTintColor: '#E91E63'}}>
      <Tab.Screen
        name="Home"
        component={MenuHome}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={MenuFavorite}
        options={{
          tabBarLabel: 'Favorites',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="star-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recent"
        component={MenuRecent}
        options={{
          tabBarLabel: 'Recent',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="time-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Download"
        component={MenuDownload}
        options={{
          tabBarLabel: 'Download',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="download-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MenuAccount"
        component={MenuAccount}
        options={{
          tabBarLabel: 'Account',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
