import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import LatestA1 from '../latest/LatestA1';

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
        {/* <LatestA1 /> */}
        <ScrollView>
          <View
            style={{
              backgroundColor: '#BCBCBC',
              // paddingTop: 95,
              // paddingBottom: 95,
            }}>
            <ImageBackground
              source={require('../image/image19.png')}
              style={{height: 207, width: 400}}>
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20,
                    paddingTop: 155,
                  }}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                marginTop: 25,
                marginHorizontal: 12,
                marginBottom: 15,
              }}>
              <View>
                <Text style={{fontSize: 15}}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah
                </Text>
              </View>
            </View>
            <View style={{marginRight: 12, marginBottom: 15, marginLeft: 225}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
                onPress={() => navigation.navigate('MenuDeskripsi')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Chapter 1
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <LatestA2 /> */}
          <View
            style={{
              backgroundColor: '#BCBCBC',
              // paddingTop: 95,
              // paddingBottom: 95,
            }}>
            <ImageBackground
              source={require('../image/image19.png')}
              style={{height: 207, width: 400}}>
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20,
                    paddingTop: 155,
                  }}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                marginTop: 25,
                marginHorizontal: 12,
                marginBottom: 15,
              }}>
              <View>
                <Text style={{fontSize: 15}}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah
                </Text>
              </View>
            </View>
            <View style={{marginRight: 12, marginBottom: 15, marginLeft: 225}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
                onPress={() => navigation.navigate('MenuDeskripsi')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Chapter 1
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <LatestA2 /> */}
          <View
            style={{
              backgroundColor: '#BCBCBC',
              // paddingTop: 95,
              // paddingBottom: 95,
            }}>
            <ImageBackground
              source={require('../image/image19.png')}
              style={{height: 207, width: 400}}>
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20,
                    paddingTop: 155,
                  }}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                marginTop: 25,
                marginHorizontal: 12,
                marginBottom: 15,
              }}>
              <View>
                <Text style={{fontSize: 15}}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah
                </Text>
              </View>
            </View>
            <View style={{marginRight: 12, marginBottom: 15, marginLeft: 225}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
                onPress={() => navigation.navigate('MenuDeskripsi')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Chapter 1
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <LatestA3 /> */}
          <View
            style={{
              backgroundColor: '#BCBCBC',
              // paddingTop: 95,
              // paddingBottom: 95,
            }}>
            <ImageBackground
              source={require('../image/image19.png')}
              style={{height: 207, width: 400}}>
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20,
                    paddingTop: 155,
                  }}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                marginTop: 25,
                marginHorizontal: 12,
                marginBottom: 15,
              }}>
              <View>
                <Text style={{fontSize: 15}}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah
                </Text>
              </View>
            </View>
            <View style={{marginRight: 12, marginBottom: 15, marginLeft: 225}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
                onPress={() => navigation.navigate('MenuDeskripsi')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Chapter 1
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <LatestA4 /> */}
          <View
            style={{
              backgroundColor: '#BCBCBC',
              // paddingTop: 95,
              // paddingBottom: 95,
            }}>
            <ImageBackground
              source={require('../image/image19.png')}
              style={{height: 207, width: 400}}>
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20,
                    paddingTop: 155,
                  }}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                marginTop: 25,
                marginHorizontal: 12,
                marginBottom: 15,
              }}>
              <View>
                <Text style={{fontSize: 15}}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah
                </Text>
              </View>
            </View>
            <View style={{marginRight: 12, marginBottom: 15, marginLeft: 225}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
                onPress={() => navigation.navigate('MenuDeskripsi')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Chapter 1
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <LatestA5 /> */}
          <View
            style={{
              backgroundColor: '#BCBCBC',
              // paddingTop: 95,
              // paddingBottom: 95,
            }}>
            <ImageBackground
              source={require('../image/image19.png')}
              style={{height: 207, width: 400}}>
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20,
                    paddingTop: 155,
                  }}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                marginTop: 25,
                marginHorizontal: 12,
                marginBottom: 15,
              }}>
              <View>
                <Text style={{fontSize: 15}}>
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah Bismillah Bismillah Bismillah Bismillah Bismillah
                  Bismillah
                </Text>
              </View>
            </View>
            <View style={{marginRight: 12, marginBottom: 15, marginLeft: 225}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
                onPress={() => navigation.navigate('MenuDeskripsi')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Chapter 1
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MenuLatest;

const styles = StyleSheet.create({});
