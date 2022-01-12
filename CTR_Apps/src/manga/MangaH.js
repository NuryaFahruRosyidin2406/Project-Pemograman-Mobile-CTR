import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const MangaH = () => {
  return (
    <View style={{marginRight: 12, marginVertical: 10}}>
      <View>
        <Image
          source={require('../image/Mangag1/ShingekiNoKyojin.png')}
          style={{width: 110, height: 140}}></Image>
      </View>
      <View style={{}}>
        <View style={{paddingHorizontal: 0}}>
          <Button
            title="Shingek..."
            color="#211D1D"
            onPress={() => navigation.navigate('MenuLogin')}
          />
        </View>
      </View>
    </View>
  );
};

export default MangaH;

const styles = StyleSheet.create({});
