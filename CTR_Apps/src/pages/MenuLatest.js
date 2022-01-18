import React, {useState} from 'react';
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
// import firestore from '@react-native-firebase/firestore';

const MenuLatest = ({navigation}) => {
  // penggunaan api
  // const [manga, setManga] = React.useState([]);
  // const [manga2, setManga2] = React.useState([]);
  // const [manga3, setManga3] = React.useState([]);
  // const [manga4, setManga4] = React.useState([]);
  // const [manga5, setManga5] = React.useState([]);
  // const [manga6, setManga6] = React.useState([]);

  // useEffect(() => {
  //   getManga();
  //   getManga2();
  //   getManga3();
  //   getManga4();
  //   getManga5();
  //   getManga6();
  // });

  // memakai api Manga
  // const getManga = async () => {
  //   firestore()
  //     .collection('Manga')
  //     .get()
  //     .then(querySnapshot => {
  //       const manga = [];
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data());
  //         // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
  //         manga.push({
  //           ...doc.data(),
  //           key: doc.id,
  //         });
  //       });
  //       setManga(manga);
  //     });
  // };

  // // memakai api Manga2
  // const getManga2 = async () => {
  //   firestore()
  //     .collection('Manga2')
  //     .get()
  //     .then(querySnapshot => {
  //       const manga2 = [];
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data());
  //         // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
  //         manga2.push({
  //           ...doc.data(),
  //           key: doc.id,
  //         });
  //       });
  //       setManga2(manga2);
  //     });
  // };

  // // memakai api Manga3
  // const getManga3 = async () => {
  //   firestore()
  //     .collection('Manga3')
  //     .get()
  //     .then(querySnapshot => {
  //       const manga3 = [];
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data());
  //         // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
  //         manga3.push({
  //           ...doc.data(),
  //           key: doc.id,
  //         });
  //       });
  //       setManga3(manga3);
  //     });
  // };

  // // memakai api Manga4
  // const getManga4 = async () => {
  //   firestore()
  //     .collection('Manga4')
  //     .get()
  //     .then(querySnapshot => {
  //       const manga4 = [];
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data());
  //         // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
  //         manga4.push({
  //           ...doc.data(),
  //           key: doc.id,
  //         });
  //       });
  //       setManga4(manga4);
  //     });
  // };

  // // memakai api Manga5
  // const getManga5 = async () => {
  //   firestore()
  //     .collection('Manga5')
  //     .get()
  //     .then(querySnapshot => {
  //       const manga5 = [];
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data());
  //         // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
  //         manga5.push({
  //           ...doc.data(),
  //           key: doc.id,
  //         });
  //       });
  //       setManga5(manga5);
  //     });
  // };

  // // memakai api Manga6
  // const getManga6 = async () => {
  //   firestore()
  //     .collection('Manga6')
  //     .get()
  //     .then(querySnapshot => {
  //       const manga6 = [];
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data());
  //         // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
  //         manga6.push({
  //           ...doc.data(),
  //           key: doc.id,
  //         });
  //       });
  //       setManga6(manga6);
  //     });
  // };

  const MangaData = [
    {
      id: 10121,
      title: 'Sakamoto Days',
      sinopsis:
        'Bercerita tentang Taro Sakamoto adalah pembunuh utama, ditakuti oleh penjahat dan dikagumi oleh pembunuh bayaran. Tapi suatu hari ... dia jatuh cinta! Pensiun, pernikahan, menjadi ayah, dan kemudian ... Sakamoto bertambah gemuk! Pria gemuk yang menjalankan toko lingkungan sebenarnya adalah mantan pembunuh bayaran legendaris! Bisakah dia melindungi keluarganya dari bahaya?.',
      imagemanga:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/imagemanga/skdaysbg.png?token=GHSAT0AAAAAABPHGJX4CKPQ7XGAYXBMHMLKYPP53HA',
    },
    {
      id: 20111,
      title: 'Tokyo Revengers',
      sinopsis:
        'Takemichi adalah laki-laki pengangguran berusia 26 tahun yang mengetahui bahwa gadis yang dia kencani di sekolah menengah, satu-satunya gadis yang pernah dia kencani, telah meninggal. Kemudian, setelah kecelakaan dia menemukan dirinya dalam lompatan waktu kembali ke tahun-tahun sekolah menengahnya. Dia bersumpah untuk mengubah masa depan dan menyelamatkan gadis itu.',
      imagemanga:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/imagemanga/tokyoRevengerbg.png?token=GHSAT0AAAAAABPHGJX5UYZYFOK3HEQPRHIOYPP536Q',
    },
    {
      id: 30142,
      title: 'Jujutsu Kaisen',
      sinopsis:
        'Yuuji adalah seorang jenius di jalur dan lapangan. Tapi dia memiliki minat nol, dia senang sebagai clam di Klub Penelitian Ilmu Ghaib. Meskipun Dia di Klub hanya untuk Iseng, Hal-hal menjadi serius ketika semangat nyata muncul di sekolah! Hidup akan menjadi sangat aneh Di SMA Negeri Sugisawa.',
      imagemanga:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/imagemanga/jujutsubg1.png?token=GHSAT0AAAAAABPHGJX4SRSKLLP5WGQIXBLMYPP54NA',
    },
    {
      id: 40121,
      title: 'Baki',
      sinopsis:
        'Menceritakan seorang pegulat sumo bernama Baki Hanma yang Berumur 17 tahun yang dikenal sebagai petarung yang cukup kuat. Dalam perjalanannya untuk menjadi petarung terhebat, Baki bertarung dengan kemapuan bertarung yang sangat hebat sampai bertarung dengan grandmaster seni bela diri.',
      imagemanga:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/imagemanga/baki.png?token=GHSAT0AAAAAABPHGJX5RLTKNRXBDHYRZHGOYPP545A',
    },
    {
      id: 50131,
      title: 'Solo Leveling',
      sinopsis:
        'Menghubungkan dunia nyata dengan dunia monster terbuka, beberapa orang biasa, setiap hari menerima kekuatan untuk berburu monster di dalam Gerbang. Mereka dikenal sebagai "Pemburu". Namun, tidak semua Pemburu kuat. Nama saya Sung Jin-Woo, seorang Pemburu peringkat-E. Saya seseorang yang harus mempertaruhkan nyawanya di ruang bawah tanah paling rendah, "Terlemah di Dunia".',
      imagemanga:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/imagemanga/sololvlingbg.jpg?token=GHSAT0AAAAAABPHGJX5RZDMYQTN3VZN5CSKYPP55KQ',
    },
    {
      id: 60121,
      title: 'Kimetsu No Yaiba',
      sinopsis:
        'Banyak rumor tentang setan pemakan manusia yang bersembunyi di hutan. Karena itu, warga kota setempat tidak pernah keluar rumah pada malam hari. Legenda mengatakan bahwa pembunuh iblis juga berkeliaran di malam hari, memburu setan haus darah ini. Sejak kematian ayahnya, Tanjirou telah mengambil alih dirinya untuk menghidupi ibu dan lima saudara kandungnya. Meskipun hidup mereka mungkin diperkeras oleh tragedi, mereka telah menemukan kebahagiaan.',
      imagemanga:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/imagemanga/kmybg.jpg?token=GHSAT0AAAAAABPHGJX55G53CNVSI6HPAD5EYPP555Q',
    },
  ];

  const [datamangas, setDatamangas] = useState(MangaData);

  const renderItem = ({item}) => {
    return (
      <View>
        {/* Manga Sakamoto */}
        <View>
          <View
            style={{
              backgroundColor: '#BCBCBC',
              // paddingTop: 95,
              // paddingBottom: 95,
            }}>
            <ImageBackground
              source={{uri: item.imagemanga}}
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
                onPress={() => navigation.navigate('MenuBaca')}>
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
        </View>
      </View>
    );
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
        <FlatList
          data={datamangas}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </ImageBackground>
    </View>
  );
};

export default MenuLatest;

const styles = StyleSheet.create({});
