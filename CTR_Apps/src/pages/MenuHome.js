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
import Manga1 from '../manga/manga1';

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
            <View
              source={require('../image/image14.png')}
              style={{height: 210, width: 401}}>
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
              <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                <Manga1 />
                <Manga1 />
                <Manga1 />
                <Manga1 />
                <Manga1 />
                <Manga1 />
                <Manga1 />
              </ScrollView>
            </View>
          </View>
          <View>
            <View
              source={require('../image/image16.png')}
              style={{height: 170, width: 401}}>
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
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

      {/* Bagian Gambar */}

      {/* <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: 'pink',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../image/home2.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>Home</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../image/favorite2.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
            Favorite
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../image/recent3.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
            Recent
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../image/Download2.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
            Download
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'brown',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../image/Account2.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default MenuHome;

const styles = StyleSheet.create({});
