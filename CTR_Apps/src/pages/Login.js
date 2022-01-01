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
      <View>
        <ImageBackground
          source={require('../image/image14.png')}
          style={{height: 170, width: 401}}>
          <View style={{alignItems: 'center', paddingTop: 70}}>
            <Image
              source={require('../image/ctr.png')}
              style={{height: 50, width: 321, alignItems: 'center'}}></Image>
          </View>
        </ImageBackground>
      </View>

      <View>
        <Image
          source={require('../image/Logoapk.png')}
          style={{height: 310, width: 401}}></Image>
      </View>
      <View>
        <ImageBackground
          source={require('../image/image16.png')}
          style={{height: 240, width: 401}}>
          <View style={{paddingTop: 45}}>
            <View style={{paddingHorizontal: 30}}>
              <Button
                title="Login"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuLogin')}
              />
            </View>
            <View style={{padding: 2}}></View>
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
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
