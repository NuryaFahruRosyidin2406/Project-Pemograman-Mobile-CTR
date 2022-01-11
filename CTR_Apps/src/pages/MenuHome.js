import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MangaA from '../manga/MangaA';
import MangaB from '../manga/MangaB';
import MangaC from '../manga/MangaC';
import MangaD from '../manga/MangaD';
import MangaE from '../manga/MangaE';
import MangaF from '../manga/MangaF';
import MangaG from '../manga/MangaG';
import MangaH from '../manga/MangaH';
import MangaI from '../manga/MangaI';
import MangaJ from '../manga/MangaJ';

const MenuHome = ({navigation}) => {
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
              paddingVertical: 7,
              paddingHorizontal: 76,
            }}
            onPress={() => navigation.navigate('BottomTabs')}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              HOME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#383232',
              paddingVertical: 7,
              paddingHorizontal: 76,
            }}
            onPress={() => navigation.navigate('MenuLatest')}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              LATEST
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Image
            source={require('../image/image19.png')}
            style={{height: 240, width: 400}}></Image>
        </View>
        <ScrollView>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                HOT
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: 'row',
                // backgroundColor: 'pink',
                marginHorizontal: 16,
                paddingHorizontal: 3,
              }}>
              <MangaA />
              <MangaB />
              <MangaC />
              <MangaD />
              <MangaE />
              <MangaF />
              <MangaG />
              <MangaH />
              <MangaI />
              <MangaJ />
            </ScrollView>
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                RECOMMENDED
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: 'row',
                marginHorizontal: 16,
                paddingHorizontal: 3,
              }}>
              <MangaA />
              <MangaB />
              <MangaC />
              <MangaD />
              <MangaE />
              <MangaF />
              <MangaG />
              <MangaH />
              <MangaI />
              <MangaJ />
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MenuHome;

const styles = StyleSheet.create({});
