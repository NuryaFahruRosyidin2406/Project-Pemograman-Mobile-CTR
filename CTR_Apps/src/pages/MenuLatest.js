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
                  Sakamoto Days
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
                <Text style={{fontSize: 12,textAlign:'justify'}}>
                Bercerita tentang Taro Sakamoto adalah pembunuh utama, ditakuti oleh penjahat dan dikagumi oleh pembunuh bayaran. Tapi suatu hari ... dia jatuh cinta! Pensiun, pernikahan, menjadi ayah, dan kemudian ... Sakamoto bertambah gemuk! Pria gemuk yang menjalankan toko lingkungan sebenarnya adalah mantan pembunuh bayaran legendaris! Bisakah dia melindungi keluarganya dari bahaya?
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
              backgroundColor: '#BCBCBC',paddingBottom:10
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
                  Tokyo Revengers
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
                <Text style={{fontSize: 12,textAlign:'justify'}}>
                Takemichi adalah laki-laki pengangguran berusia 26 tahun yang mengetahui bahwa gadis yang dia kencani di sekolah menengah, satu-satunya gadis yang pernah dia kencani, telah meninggal. Kemudian, setelah kecelakaan dia menemukan dirinya dalam lompatan waktu kembali ke tahun-tahun sekolah menengahnya. Dia bersumpah untuk mengubah masa depan dan menyelamatkan gadis itu
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
                  Jujutsu Kaisen
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
                <Text style={{fontSize: 12,textAlign:'justify'}}>
                Yuuji adalah seorang jenius di jalur dan lapangan. Tapi dia memiliki minat nol, dia senang sebagai clam di Klub Penelitian Ilmu Ghaib. Meskipun Dia di Klub hanya untuk Iseng, Hal-hal menjadi serius ketika semangat nyata muncul di sekolah! Hidup akan menjadi sangat aneh Di SMA Negeri Sugisawa
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
                    paddingTop: 170,
                  }}>
                  BAKI
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
              <Text style={{fontSize: 12,textAlign:'justify'}}>
                Menceritakan seorang pegulat sumo bernama Baki Hanma yang Berumur 17 tahun yang dikenal sebagai petarung yang cukup kuat. Dalam perjalanannya untuk menjadi petarung terhebat, Baki bertarung dengan kemapuan bertarung yang sangat hebat sampai bertarung dengan grandmaster seni bela diri.
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
                  Solo Leveling
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
                <Text style={{fontSize: 12,textAlign:'justify'}}>
                Menghubungkan dunia nyata dengan dunia monster terbuka, beberapa orang biasa, setiap hari menerima kekuatan untuk berburu monster di dalam Gerbang. Mereka dikenal sebagai "Pemburu". Namun, tidak semua Pemburu kuat. Nama saya Sung Jin-Woo, seorang Pemburu peringkat-E. Saya seseorang yang harus mempertaruhkan nyawanya di ruang bawah tanah paling rendah, "Terlemah di Dunia". 
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
                   Kimetsu no Yaiba 
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
                <Text style={{fontSize: 15,textAlign:'justify'}}>
                Banyak rumor tentang setan pemakan manusia yang bersembunyi di hutan. Karena itu, warga kota setempat tidak pernah keluar rumah pada malam hari. Legenda mengatakan bahwa pembunuh iblis juga berkeliaran di malam hari, memburu setan haus darah ini. Sejak kematian ayahnya, Tanjirou telah mengambil alih dirinya untuk menghidupi ibu dan lima saudara kandungnya. Meskipun hidup mereka mungkin diperkeras oleh tragedi, mereka telah menemukan kebahagiaan. 
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
