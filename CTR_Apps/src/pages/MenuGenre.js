import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const MenuGenre = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
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

          <TouchableOpacity
            style={{
              backgroundColor: '#383232',
              paddingVertical: 7,
              paddingHorizontal: 76,
            }}
            onPress={() => navigation.navigate('MenuGenre')}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              GENRE
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../image/bgcb.png')}
            style={{flex: 1, paddingTop: 15, paddingRight: 5, paddingLeft: 13}}>
            <View style={{paddingTop: 30, position: 'relative'}}>
              <TextInput
                placeholder="What do you want to Search?"
                style={{
                  borderRadius: 25,
                  height: 40,
                  fontSize: 13,
                  backgroundColor: 'white',
                  paddingLeft: 40,
                  borderWidth: 1,
                  paddingRight: 10,
                }}></TextInput>
              <Image
                source={require('../image/Genre/mystery.png')}
                style={{
                  position: 'absolute',
                  width: 30,
                  height: 30,
                  bottom: 5,
                  left: 10,
                }}></Image>
            </View>

            <View style={{paddingTop: 60}}>
              <View
                style={{
                  width: 370,
                  height: 300,
                  backgroundColor: 'white',
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 25,
                    paddingTop: 20,
                  }}>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/action.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        Action{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{paddingLeft: 10}}></View>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/drama.png')}
                        style={{
                          width: 40,
                          left: 11,
                          bottom: -4,
                          height: 40,
                          backgroundColor: 'Black',
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        Drama{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{paddingLeft: 10}}></View>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/fantasy.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        Fantasy{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{paddingLeft: 10}}></View>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/funny.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                          left: 10,
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        Comedy{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 25,
                    paddingTop: 20,
                  }}>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/horor.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                          left: 10,
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        Thriler{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{paddingLeft: 10}}></View>

                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/magic.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                          left: 9,
                          bottom: -5,
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        Magic{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{paddingLeft: 10}}></View>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/mecha.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                          left: 10,
                          bottom: -5,
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        Mecha{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{paddingLeft: 10}}></View>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/romance.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                          left: 10,
                          bottom: -5,
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        Romance
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 25,
                    paddingTop: 20,
                  }}>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/mystery.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                          left: 10,
                          bottom: -5,
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        Mystery{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{paddingLeft: 10}}></View>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/sport.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                          left: 10,
                          bottom: -5,
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        Sport{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{paddingLeft: 10}}></View>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/supernatural.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                          left: 10,
                          bottom: -5,
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        SNTL{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{paddingLeft: 10}}></View>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'black',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingLeft: 5,
                        paddingTop: 10,
                      }}
                      onPress={() => navigation.navigate('MenuDownload')}>
                      <Image
                        source={require('../image/Genre/scfi.png')}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: 'Black',
                          left: 10,
                          bottom: -5,
                        }}></Image>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          paddingTop: 20,
                        }}>
                        {' '}
                        SCFIL{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

export default MenuGenre;

const styles = StyleSheet.create({});
