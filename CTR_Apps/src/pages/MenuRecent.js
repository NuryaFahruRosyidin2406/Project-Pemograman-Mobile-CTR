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
          <ImageBackground
            source={require('../image/bgcb.png')}
            style={{flex: 1}}>
            <View style={{paddingVertical: 280}}>
              <Text
                style={{
                  color: '#20232A',
                  borderColor: 'black',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                You have no read history
              </Text>
              <Text
                style={{
                  color: '#20232A',
                  borderColor: 'black',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Recently read comics
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

export default MenuRecent;

const styles = StyleSheet.create({});
