import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput,
} from 'react-native';

import {roundToNearestPixel} from 'react-native/Libraries/Utilities/PixelRatio';

const MenuDeskripsi = ({route, navigation}) => {
  const hotURL = 'https://api.jikan.moe/v4/manga/';

  // const [data, setData] = useState({});
  const [imgbg, setImgBg] = useState('');
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [genre, setGenre] = useState([]);
  const [tipe, setTipe] = useState('');
  const [chapter, setChapter] = useState('');
  const [popula, setPopularity] = useState('');
  const [stat, setStatus] = useState('');
  const [score, setScore] = useState('');
  const [rank, setRank] = useState('');

  useEffect(() => {
    if (route.params?.mal_id) {
      fetch(hotURL + route.params.mal_id)
        .then(response => response.json())
        .then(json => {
          setImgBg(json.data.images.jpg.large_image_url);
          setDesc(json.data.synopsis);
          setTitle(json.data.title);
          setTipe(json.data.type);
          setPopularity(json.data.popularity);
          setChapter(json.data.chapters);
          setStatus(json.data.status);
          setImg(json.data.images.jpg.image_url);
          setGenre(json.data.genres);
          setScore(json.data.scored);
          setRank(json.data.rank);
        })
        .catch(error => alert(error));
    }
  });

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#383232',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Deskripsi</Text>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../image/mangadis.png')}
            style={{flex: 1}}>
            <View>
              <ImageBackground
                source={{uri: imgbg}}
                style={{height: 220, width: 400}}>
                <View
                  style={{
                    height: 180,
                    width: 140,
                    paddingTop: 120,
                    paddingLeft: 25,
                  }}>
                  <Image
                    source={{uri: img}}
                    style={{height: 180, width: 140}}></Image>
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                marginRight: 10,
                marginBottom: 15,
                marginLeft: 225,
                paddingTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 50,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {title}
                </Text>
              </View>
            </View>

            <View
              style={{
                borderRadius: 20,
                height: 30,
                backgroundColor: 'white',
                borderBottomWidth: 5,
                borderTopWidth: 1,
              }}>
              <Text
                style={{
                  color: 'black',
                  top: 4,
                  left: 15,
                  fontSize: 15,
                  fontWeight: '500',
                  textShadowColor: 'black',
                  textShadowRadius: 1,
                }}>
                {' '}
                Genre : {genre.map(g => g.name).join(', ')}{' '}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  alignItems: 'center',

                  borderWidth: 1,
                  borderColor: '#777',
                  padding: 8,
                  margin: 10,
                  width: 150,
                  borderBottomWidth: 5,
                  borderTopWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    textShadowColor: 'black',
                    textShadowRadius: 1,
                  }}>
                  Type: {tipe}{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    textShadowColor: 'black',
                    textShadowRadius: 1,
                  }}>
                  Chapter: {chapter}{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    textShadowColor: 'black',
                    textShadowRadius: 1,
                  }}>
                  Popularity: {popula}{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    textShadowColor: 'black',
                    textShadowRadius: 1,
                  }}>
                  status: {stat}{' '}
                </Text>
              </View>
              <View style={{flexDirection: 'column', top: -25}}>
                <View>
                  <View
                    style={{
                      borderRadius: 25,
                      backgroundColor: 'white',
                      borderWidth: 1,
                      height: 35,
                      width: 150,
                      bottom: -50,
                      left: 40,
                      flexDirection: 'row',
                      position: 'relative',
                      borderBottomWidth: 5,
                      borderTopWidth: 1,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        right: -40,
                        bottom: -5,
                        fontSize: 15,
                        fontWeight: 'bold',
                        textShadowColor: 'black',
                        textShadowRadius: 1,
                      }}>
                      Rank : {rank}
                    </Text>
                    <Image
                      source={require('../image/star.png')}
                      style={{
                        height: 30,
                        width: 30,
                        position: 'absolute',
                      }}></Image>
                  </View>
                </View>

                <View style={{paddingTop: 15}}>
                  <View
                    style={{
                      borderRadius: 25,
                      backgroundColor: 'white',
                      borderWidth: 1,
                      height: 35,
                      width: 150,
                      bottom: -50,
                      left: 40,
                      flexDirection: 'row',
                      position: 'relative',
                      borderBottomWidth: 5,
                      borderTopWidth: 1,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        right: -40,
                        bottom: -5,
                        fontSize: 15,
                        fontWeight: 'bold',
                        textShadowColor: 'black',
                        textShadowRadius: 1,
                      }}>
                      Srcore : {score}
                    </Text>
                    <Image
                      source={require('../image/star.png')}
                      style={{
                        height: 30,
                        width: 30,
                        position: 'absolute',
                      }}></Image>
                  </View>
                </View>
              </View>
            </View>

            <View style={{paddingTop: 10}}>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'justify',
                  fontWeight: '500',
                  textShadowColor: 'black',
                  textShadowRadius: 1,
                }}>
                {desc}
              </Text>
            </View>

            <View style={{flexDirection: 'column-reverse'}}>
              <View
                style={{marginRight: 12, marginBottom: 15, marginLeft: 259}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#383232',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 20,
                    marginTop: -100,
                  }}
                  onPress={() => navigation.navigate('MenuDownload')}>
                  <Image source={require('../image/download.png')}></Image>
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
                <View
                  style={{
                    paddingTop: 5,
                    resizeMode: 'contain',
                    height: 50,
                    width: 200,
                  }}>
                  <Button
                    title="Chapter 1"
                    color="#211D1D"
                    onPress={() => navigation.navigate('MenuHome')}
                  />
                </View>

                <View
                  style={{
                    paddingTop: 5,
                    resizeMode: 'contain',
                    height: 50,
                    width: 200,
                  }}>
                  <Button
                    title="Back"
                    color="#211D1D"
                    onPress={() => navigation.navigate('BottomTabs')}
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuDeskripsi;

const styles = StyleSheet.create({});
