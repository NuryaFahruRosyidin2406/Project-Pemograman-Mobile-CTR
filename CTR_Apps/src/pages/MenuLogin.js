import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

const MenuLogin = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View>
        <ImageBackground
          source={require('../image/image14.png')}
          style={{height: 170, width: 401}}>
          <View style={{alignItems: 'center', paddingTop: 70}}></View>
        </ImageBackground>
      </View>

      <View>
        <ImageBackground
          source={require('../image/background1.png')}
          style={{height: 310, width: 401}}>
          <View style={{marginHorizontal: 30, marginTop: 10, paddingTop: 30}}>
            <StatusBar backgroundColor="#727272" barStyle="light-content" />
            <TouchableOpacity
              style={{
                backgroundColor: '#211D1D',
                paddingVertical: 20,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../image/google1.png')}
                  style={{height: 40, width: 40}}></Image>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                    padding: 10,
                  }}>
                  {' '}
                  LOGIN DENGAN GOOGLE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 30, marginTop: 60}}>
            <StatusBar backgroundColor="#727272" barStyle="light-content" />
            <TouchableOpacity
              style={{
                backgroundColor: '#211D1D',
                paddingVertical: 9,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../image/facebook1.png')}
                  style={{height: 60, width: 30}}></Image>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                    padding: 20,
                  }}>
                  {' '}
                  LOGIN DENGAN FACEBOOK
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View>
        <ImageBackground
          source={require('../image/image16.png')}
          style={{height: 240, width: 401}}></ImageBackground>
      </View>
    </View>
  );
};

export default MenuLogin;

const styles = StyleSheet.create({});
