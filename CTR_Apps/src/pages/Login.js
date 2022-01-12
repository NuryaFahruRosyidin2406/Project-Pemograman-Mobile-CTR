import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../image/background/1x/background1mdpi.png')}
        style={{flex: 1}}>
        <View style={{paddingTop: 535}}>
          <View style={{paddingHorizontal: 30}}>
            <Button
              title="Login"
              color="#211D1D"
              onPress={() => navigation.navigate('MenuLogin')}
            />
          </View>
          <View style={{padding: 5}}></View>
          <View style={{paddingHorizontal: 30}}>
            <Button
              title="Guest"
              color="#211D1D"
              onPress={() => navigation.navigate('BottomTabs')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
