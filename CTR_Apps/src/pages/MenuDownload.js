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
          <Text style={{color: 'white', fontWeight: 'bold'}}>Download</Text>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../image/background2/0.75x/background2ldpi.png')}
            style={{flex: 1}}></ImageBackground>
        </View>
      </View>
    </>
  );
};

export default MenuRecent;

const styles = StyleSheet.create({});
