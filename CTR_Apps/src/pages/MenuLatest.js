import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';

const MenuLatest = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../image/background2/1x/background2mdpi.png')}
        style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#383232',
              paddingHorizontal: 75.5,
            }}>
            <View>
              <Button
                title="HOME"
                color="#383232"
                onPress={() => navigation.navigate('BottomTabs')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#383232',
              paddingHorizontal: 75.5,
            }}>
            <View>
              <Button
                title="LATEST"
                color="#383232"
                onPress={() => navigation.navigate('MenuLatest')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MenuLatest;

const styles = StyleSheet.create({});
