import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
  ,Button
} from 'react-native';

const MenuDeskripsi = ({navigation}) => {
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
          <Text style={{color: 'white', fontWeight: 'bold'}}>Diskripsi</Text>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../image/mangadis.png')}
            style={{flex: 1}}>
            <View>
              <ImageBackground source={require('../image/Manga1/skdaysbg.png')} style={{height:220,width:400}} >
              <View style={{height:180,width:140,paddingTop:120,paddingLeft:25}} >
                <Image source={require('../image/Manga1/sakamoto.png')} style={{height:180,width:140}}>
                </Image>
              </View>
              </ImageBackground>
            </View>
            <View style={{marginRight: 10, marginBottom: 15, marginLeft: 225,paddingTop:10}}>
              <View
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 50,
                }}
                >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Sakamoto Days
                </Text>
              </View>
            </View>
            <View>
                <Text style={{fontSize:12,textAlign:'justify'}}> Bercerita tentang Taro Sakamoto adalah pembunuh utama, ditakuti oleh penjahat dan dikagumi oleh pembunuh bayaran. Tapi suatu hari ... dia jatuh cinta! Pensiun, pernikahan, menjadi ayah, dan kemudian ... Sakamoto bertambah gemuk! Pria gemuk yang menjalankan toko lingkungan sebenarnya adalah mantan pembunuh bayaran legendaris! Bisakah dia melindungi keluarganya dari bahaya?
                </Text>
                </View>
                <View style={{marginRight: 12, marginBottom: 15, marginLeft: 259}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
                onPress={() => navigation.navigate('MenuDeskripsi')}>
                  <Image source={require('../image/download.png')} ></Image>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Download
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{}}>
              <View style={{paddingTop:5,resizeMode: "contain",
            height: 50,
            width: 300}}>
              <Button
                title="Chapter 1"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuBaca')}
              />
              </View>
            </View>
            <View style={{}}>
              <View style={{paddingTop:5,resizeMode: "contain",
            height: 50,
            width: 300}}>
              <Button
                title="Back"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuLatest')}
              />
              </View>
            </View>

          </ImageBackground>
        </View>

      </View>
    </>
  );
};

export default MenuDeskripsi;

const styles = StyleSheet.create({});
