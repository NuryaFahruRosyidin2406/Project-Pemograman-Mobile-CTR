import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const MenuDeskripsi = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>Ini Menu Deskripsi</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#383232',
          paddingVertical: 7,
          paddingHorizontal: 76,
        }}
        onPress={() => navigation.navigate('BottomTabs')}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
          HOME
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuDeskripsi;

const styles = StyleSheet.create({});
