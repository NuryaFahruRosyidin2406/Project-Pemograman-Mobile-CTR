import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
// penggunaan api
import firestore from '@react-native-firebase/firestore';

const MenuFavorite = ({navigation}) => {
  // penggunaan api
  const [users, setUsers] = React.useState([]);
  const [manga, setManga] = React.useState([]);

  useEffect(() => {
    getUser();
    getManga();
  });

  const getUser = async () => {
    firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        const users = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          // data tiap dokumen dimasukkan ke array state lalu di masukkan ke data flatlist
          users.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setUsers(users);
      });
  };

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
  // penggunaan api

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#383232',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Favorites</Text>
      </View>
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../image/bgcb.png')}
          style={{flex: 1}}>
          <View style={{paddingVertical: 260}}>
            <Text
              style={{
                color: '#20232A',
                borderColor: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Not yet added to favorites
            </Text>
            <Text
              style={{
                color: '#20232A',
                borderColor: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Add mangas to favorites
            </Text>
            <Text
              style={{
                color: '#20232A',
                borderColor: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              I will tell you when new chapter are added
            </Text>
          </View>
          {/* coba api */}
          {/* <View>
            <Text>Tutorial Firestore</Text>
            <FlatList
              data={manga}
              renderItem={({item}) => (
                <View
                  style={{
                    height: 50,
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    Title: {item.title}
                  </Text>
                  <Text>Sinopsis: {item.sinopsis}</Text>
                </View>
              )}
            />
          </View>
          coba api */}
        </ImageBackground>
      </View>
    </View>
  );
};

export default MenuFavorite;

const styles = StyleSheet.create({});
