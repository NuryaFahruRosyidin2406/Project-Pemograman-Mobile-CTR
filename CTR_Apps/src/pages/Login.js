import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../image/background/1x/background1mdpi.png')}
        style={{flex: 1}}>
        <View style={{paddingTop: 490, paddingHorizontal: 60}}>
          {/* <View>
            <Button
              title="Login"
              color="#211D1D"
              onPress={() => navigation.navigate('MenuLogin')}
            />
          </View>
          <View style={{padding: 5}}></View>
          <View>
            <Button
              title="Guest"
              color="#211D1D"
              onPress={() => navigation.navigate('BottomTabs')}
            />
          </View> */}
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: '#211D1D',
              paddingVertical: 9,
              borderRadius: 9,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('MenuLogin')}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
                padding: 6,
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 25,
              backgroundColor: '#211D1D',
              paddingVertical: 9,
              borderRadius: 9,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('BottomTabs')}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
                padding: 6,
              }}>
              GUEST
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
