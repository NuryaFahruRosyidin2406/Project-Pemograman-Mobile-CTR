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

const MenuHome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#383232',
            // paddingVertical: 10,
            paddingHorizontal: 75.5,
          }}>
          {/* <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            HOME
          </Text> */}
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
            // paddingVertical: 10,
            paddingHorizontal: 75.5,
          }}>
          {/* <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            LATEST
          </Text> */}
          <View>
            <Button
              title="LATEST"
              color="#383232"
              onPress={() => navigation.navigate('MenuLatest')}
            />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{}}>
          <Image
            source={require('../image/image19.png')}
            style={{height: 240, width: 400}}></Image>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ImageBackground
            source={require('../image/image14.png')}
            style={{height: 210, width: 401}}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  paddingHorizontal: 177,
                }}>
                {' '}
                HOT{' '}
              </Text>
            </View>
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
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
            </ScrollView>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
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
          </ImageBackground>
        </View>
      </ScrollView>

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
