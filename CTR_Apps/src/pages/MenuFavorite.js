import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

const MenuFavorite = ({navigation}) => {
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
          <Text style={{color: 'white', fontWeight: 'bold'}}>Favorites</Text>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../image/background2/1x/background2mdpi.png')}
            style={{flex: 1}}>
            <View style={{paddingVertical: 260}}>
              <Text
                style={{
                  color: '#20232A',
                  borderColor: 'black',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Not yet added to favorites
              </Text>
              <Text
                style={{
                  color: '#20232A',
                  borderColor: 'black',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Add mangas to favorites
              </Text>
              <Text
                style={{
                  color: '#20232A',
                  borderColor: 'black',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                I will tell you when new chapter are added
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

export default MenuFavorite;

const styles = StyleSheet.create({});
