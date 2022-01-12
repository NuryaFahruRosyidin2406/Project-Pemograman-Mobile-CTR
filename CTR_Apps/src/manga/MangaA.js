import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
} from 'react-native';

const MangaA = () => {
  return (
    <View style={{marginRight: 12, marginVertical: 10}}>
      <View style={{}}>
        <ImageBackground
          source={require('../image/Mangag1/BokunoHeroAcademia.png')}
          style={{width: 110, height: 140}}></ImageBackground>

        <View style={{}}>
          <View style={{paddingHorizontal: 0}}>
            <Button
              title="Boku No..."
              color="#211D1D"
              onPress={() => navigation.navigate('MenuLogin')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MangaA;

const styles = StyleSheet.create({});
