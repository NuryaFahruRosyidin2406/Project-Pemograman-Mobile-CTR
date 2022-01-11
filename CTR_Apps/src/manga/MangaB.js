import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const MangaB = () => {
  return (
    <View>
      <View style={{paddingHorizontal: 10}}>
        <Image
          source={require('../image/manga1.png')}
          style={{width: 110, height: 140}}></Image>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          paddingHorizontal: 10,
        }}>
        Manga
      </Text>
    </View>
  );
};

export default MangaB;

const styles = StyleSheet.create({});
