import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  FlatList,
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

const hotURL = 'https://api.jikan.moe/v4/recommendations/manga';

const MenuHome = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(hotURL)
      .then(response => response.json())
      .then(json => {
        setData(json.data);
      })
      .catch(error => alert(error))
      .finally(setLoading(false));
  }, []);

  async function getTopMangaAsync() {
    try {
      let response = await fetch(hotURL);
      let json = await response.json();
      setData(json.data);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  const cutStr = (str, index = 6) => {
    const arr = str.split('');

    let result = '';

    arr.map((el, idx) => {
      if (idx < index) {
        result += el;
      }
    });
    // result += '...';
    if (result.length < index) {
      result;
    } else result += '...';
    return result;
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../image/bgcb.png')} style={{flex: 1}}>
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

        <ScrollView
          horizontal={true}
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginHorizontal: -8.5,
            paddingHorizontal: 0,
          }}>
          <FlatList
            data={data}
            horizontal={true}
            keyExtractor={({mal_id}, index) => mal_id}
            renderItem={({item}) => (
              <ImageBackground
                source={{uri: item.entry[0].images.webp.large_image_url}}
                style={{height: 260, width: 410}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    paddingVertical: 7,
                    marginHorizontal: 40,
                    top: 135,
                    borderRadius: 25,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    alignItems: 'center',
                    alignContent: 'center',
                    opacity: 0.5,
                  }}
                  onPress={() =>
                    navigation.navigate('MenuDeskripsi', {
                      mal_id: item.entry[0].mal_id,
                    })
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: 'bold',
                      opacity: 3,
                      textShadowColor: 'black',
                      textShadowRadius: 1,
                    }}>
                    {item.entry[0].title}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            )}
          />

          {/* <ImageBackground
            source={require('../image/Manga1/skdaysbg.png')}
            style={{height: 260, width: 410}}>
              <View style={{paddingTop:137,paddingLeft:10}}>
              <Text style={{color: 'white', fontWeight: 'bold',fontSize:30}}>Sakamoto Days
              </Text>
              </View>
              </ImageBackground>
            
              <ImageBackground
            source={require('../image/Manga2/tokyoRevengerbg.png')}
            style={{height: 260, width: 410}}>
              <View style={{paddingTop:137,paddingLeft:10}}>
              <Text style={{color: 'white', fontWeight: 'bold',fontSize:30}}>Tokyo Revanger
              </Text>
              </View>
              </ImageBackground>

              <ImageBackground
            source={require('../image/Manga4/sololvlingbg.jpg')}
            style={{height: 260, width: 410}}>
              <View style={{paddingTop:137,paddingLeft:10}}>
              <Text style={{color: 'white', fontWeight: 'bold',fontSize:30}}>solo leveling
              </Text>
              </View>
              </ImageBackground>

              <ImageBackground
            source={require('../image/Manga5/kmybg.jpg')}
            style={{height: 260, width: 410}}>
              <View style={{paddingTop:137,paddingLeft:10}}>
              <Text style={{color: 'white', fontWeight: 'bold',fontSize:30}}>Kimetsu no yaiba
              </Text>
              </View>
              </ImageBackground> */}
        </ScrollView>
        <ScrollView>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                  paddingTop: 15,
                }}>
                HOT
              </Text>
            </View>
            <FlatList
              data={data}
              horizontal={true}
              keyExtractor={item => item.entry}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: 'white',
                    marginLeft: 16,
                    marginVertical: 10,
                  }}>
                  <View style={{}}>
                    <View
                      style={
                        {
                          // paddingLeft: 35,
                          // paddingRight: 15,
                          // marginRight: 10,
                        }
                      }>
                      <ImageBackground
                        source={{uri: item.entry[0].images.jpg.image_url}}
                        style={{width: 110, height: 140}}></ImageBackground>
                    </View>
                  </View>

                  <View style={{}}>
                    <View
                      style={{
                        paddingVertical: 0,
                        // paddingHorizontal: 15,
                        borderRadius: 0,
                      }}>
                      <Button
                        title={cutStr(item.entry[0].title, 9)}
                        // title={item.entry[0].title}
                        color="#211D1D"
                        onPress={() =>
                          navigation.navigate('MenuDeskripsi', {
                            mal_id: item.entry[0].mal_id,
                          })
                        }
                      />
                    </View>
                  </View>
                </View>
              )}
            />
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: 'row',
                // backgroundColor: 'white',
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
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                  paddingTop: 15,
                }}>
                BERWARNA
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: 'row',
                // backgroundColor: 'white',
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
