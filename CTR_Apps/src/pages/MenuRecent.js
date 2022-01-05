import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

const MenuRecent = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#383232',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Recent</Text>
        </View>
        <View style={{flex: 1}}>
          <Image
            source={require('../image/image28.png')}
            style={{height: 200, width: 401}}></Image>
          <View style={{alignItems: 'center', paddingTop: 10}}>
            <Image
              source={require('../image/image14.png')}
              style={{height: 190, width: 400, alignItems: 'center'}}></Image>
          </View>
          <View>
            <ImageBackground
              source={require('../image/image16.png')}
              style={{height: 240, width: 401}}></ImageBackground>
          </View>
        </View>
      </View>
    </>
  );
};

export default MenuRecent;

const styles = StyleSheet.create({});
