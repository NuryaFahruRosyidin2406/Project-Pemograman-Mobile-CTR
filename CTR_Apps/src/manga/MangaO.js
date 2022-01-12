import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MangaO = () => {
  // penggunaan api
  const [manga5, setManga5] = React.useState([]);

  useEffect(() => {
    getManga5();
  });

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
  // penggunaan api

  return (
    <View>
      <FlatList
        data={manga5}
        renderItem={({item}) => (
          <View style={{marginRight: 12, marginVertical: 10}}>
            <View>
              <Image
                source={require('../image/Manga4/sololvlong.png')}
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

export default MangaO;

const styles = StyleSheet.create({});
