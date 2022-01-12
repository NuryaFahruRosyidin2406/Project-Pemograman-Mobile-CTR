import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const MangaD = () => {
  return (
    <View style={{marginRight: 12, marginVertical: 10}}>
      <View>
        <Image
          source={require('../image/Mangag1/ShikkakumonnoSaikyouKenja.png')}
          style={{width: 110, height: 140}}></Image>
      </View>
      <View style={{}}>
        <View style={{paddingHorizontal: 0}}>
          <Button
            title="Shikka..."
            color="#211D1D"
            onPress={() => navigation.navigate('MenuLogin')}
          />
        </View>
      </View>
    </View>
  );
};

export default MangaD;

const styles = StyleSheet.create({});
