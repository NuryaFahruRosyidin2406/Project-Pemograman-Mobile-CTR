import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MangaG = () => {
  // penggunaan api
  const [manga, setManga] = React.useState([]);

  useEffect(() => {
    getManga();
  });

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
    <View>
      <FlatList
        data={manga}
        renderItem={({item}) => (
          <View style={{marginRight: 12, marginVertical: 10}}>
            <View>
              <Image
                source={require('../image/manga1.png')}
                style={{width: 110, height: 140}}></Image>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
              }}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default MangaG;

const styles = StyleSheet.create({});
