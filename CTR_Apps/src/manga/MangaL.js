import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MangaL = () => {
  // penggunaan api
  const [manga2, setManga2] = React.useState([]);

  useEffect(() => {
    getManga2();
  });

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
  // penggunaan api

  return (
    <View>
      <FlatList
        data={manga2}
        renderItem={({item}) => (
          <View style={{marginRight: 12, marginVertical: 10}}>
            <View>
              <Image
                source={require('../image/Manga2/tokyorevenger.png')}
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

export default MangaL;

const styles = StyleSheet.create({});
