import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MenuLatest = ({navigation}) => {
  // penggunaan api
  const [manga, setManga] = React.useState([]);
  const [manga2, setManga2] = React.useState([]);
  const [manga3, setManga3] = React.useState([]);
  const [manga4, setManga4] = React.useState([]);
  const [manga5, setManga5] = React.useState([]);
  const [manga6, setManga6] = React.useState([]);

  useEffect(() => {
    getManga();
    getManga2();
    getManga3();
    getManga4();
    getManga5();
    getManga6();
  });

  // memakai api Manga
  const getManga = async () => {
    firestore()
      .collection('Manga')
      .get()
      .then(querySnapshot => {
        const manga = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
          manga.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setManga(manga);
      });
  };

  // memakai api Manga2
  const getManga2 = async () => {
    firestore()
      .collection('Manga2')
      .get()
      .then(querySnapshot => {
        const manga2 = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
          manga2.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setManga2(manga2);
      });
  };

  // memakai api Manga3
  const getManga3 = async () => {
    firestore()
      .collection('Manga3')
      .get()
      .then(querySnapshot => {
        const manga3 = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
          manga3.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setManga3(manga3);
      });
  };

  // memakai api Manga4
  const getManga4 = async () => {
    firestore()
      .collection('Manga4')
      .get()
      .then(querySnapshot => {
        const manga4 = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
          manga4.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setManga4(manga4);
      });
  };

  // memakai api Manga5
  const getManga5 = async () => {
    firestore()
      .collection('Manga5')
      .get()
      .then(querySnapshot => {
        const manga5 = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
          manga5.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setManga5(manga5);
      });
  };

  // memakai api Manga6
  const getManga6 = async () => {
    firestore()
      .collection('Manga6')
      .get()
      .then(querySnapshot => {
        const manga6 = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
          manga6.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setManga6(manga6);
      });
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../image/background2/1x/background2mdpi.png')}
        style={{flex: 1}}>
        {/* Bagian Home dan Latest */}
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
        {/* Bagian Home dan Latest */}
        <ScrollView>
          {/* Manga Sakamoto */}
          <View>
            <FlatList
              data={manga}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#BCBCBC',
                    // paddingTop: 95,
                    // paddingBottom: 95,
                  }}>
                  <ImageBackground
                    source={require('../image/Manga1/skdaysbg.png')}
                    style={{height: 207, width: 400}}>
                    <View style={{marginLeft: 8}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 25,
                          paddingTop: 170,
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  </ImageBackground>
                  <View
                    style={{
                      marginTop: 25,
                      marginHorizontal: 12,
                      marginBottom: 15,
                    }}>
                    <View style={{}}>
                      <Text style={{fontSize: 12, textAlign: 'justify'}}>
                        {item.sinopsis}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginRight: 12,
                      marginBottom: 15,
                      marginLeft: 225,
                    }}>
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
              )}
            />
          </View>
          {/* Manga Sakamoto */}
          {/* Manga Tokyo Revengers */}
          <View>
            <FlatList
              data={manga2}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#BCBCBC',
                    paddingBottom: 10,
                    // paddingTop: 95,
                    // paddingBottom: 95,
                  }}>
                  <ImageBackground
                    source={require('../image/Manga2/tokyoRevengerbg.png')}
                    style={{height: 207, width: 400}}>
                    <View style={{marginLeft: 8}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 25,
                          paddingTop: 170,
                        }}>
                        {item.title}
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
                      <Text style={{fontSize: 12, textAlign: 'justify'}}>
                        {item.sinopsis}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginRight: 12,
                      marginBottom: 15,
                      marginLeft: 225,
                    }}>
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
              )}
            />
          </View>
          {/* Manga Tokyo Revengers */}
          {/* Manga Jujutsu Kaisen 3 */}
          <View>
            <FlatList
              data={manga3}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#BCBCBC',
                    // paddingTop: 95,
                    // paddingBottom: 95,
                  }}>
                  <ImageBackground
                    source={require('../image/Manga3/jujutsubg1.png')}
                    style={{height: 207, width: 400}}>
                    <View style={{marginLeft: 8}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 25,
                          paddingTop: 170,
                        }}>
                        {item.title}
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
                      <Text style={{fontSize: 12, textAlign: 'justify'}}>
                        {item.sinopsis}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginRight: 12,
                      marginBottom: 15,
                      marginLeft: 225,
                    }}>
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
              )}
            />
          </View>
          {/* Manga Jujutsu Kaisen */}
          {/* Manga Baki 4 */}
          <View>
            <FlatList
              data={manga4}
              renderItem={({item}) => (
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
                          paddingTop: 170,
                        }}>
                        {item.title}
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
                      <Text style={{fontSize: 12, textAlign: 'justify'}}>
                        {item.sinopsis}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginRight: 12,
                      marginBottom: 15,
                      marginLeft: 225,
                    }}>
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
              )}
            />
          </View>
          {/* Manga Baki */}
          {/* Manga Solo Leveling 5*/}
          <View>
            <FlatList
              data={manga5}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#BCBCBC',
                    // paddingTop: 95,
                    // paddingBottom: 95,
                  }}>
                  <ImageBackground
                    source={require('../image/Manga4/sololvlingbg.jpg')}
                    style={{height: 207, width: 400}}>
                    <View style={{marginLeft: 8}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 20,
                          paddingTop: 170,
                        }}>
                        {item.title}
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
                      <Text style={{fontSize: 12, textAlign: 'justify'}}>
                        {item.sinopsis}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginRight: 12,
                      marginBottom: 15,
                      marginLeft: 225,
                    }}>
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
              )}
            />
          </View>
          {/* Manga Solo Leveling */}
          {/* Manga Kimetsu No Yaiba 6*/}
          <View>
            <FlatList
              data={manga6}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#BCBCBC',
                    // paddingTop: 95,
                    // paddingBottom: 95,
                  }}>
                  <ImageBackground
                    source={require('../image/Manga5/kmybg.jpg')}
                    style={{height: 207, width: 400}}>
                    <View style={{marginLeft: 8}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 20,
                          paddingTop: 170,
                        }}>
                        {item.title}
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
                      <Text style={{fontSize: 15, textAlign: 'justify'}}>
                        {item.sinopsis}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginRight: 12,
                      marginBottom: 15,
                      marginLeft: 225,
                    }}>
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
              )}
            />
          </View>
          {/* Manga Kimetsu No Yaiba */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MenuLatest;

const styles = StyleSheet.create({});
