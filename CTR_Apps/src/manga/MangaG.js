import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const MangaG = () => {
  return (
    <View style={{marginRight: 12, marginVertical: 10}}>
      <View>
        <Image
          source={require('../image/manga1.png')}
          style={{width: 110, height: 140}}></Image>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
        }}>
        Manga
      </Text>
    </View>
  );
};

export default MangaG;

const styles = StyleSheet.create({});
