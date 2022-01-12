import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MangaP = () => {
  // penggunaan api
  const [manga6, setManga6] = React.useState([]);

  useEffect(() => {
    getManga6();
  });

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
  // penggunaan api

  return (
    <View>
      <FlatList
        data={manga6}
        renderItem={({item}) => (
          <View style={{marginRight: 12, marginVertical: 10}}>
            <View>
              <Image
                source={require('../image/Manga5/kmy.png')}
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

export default MangaP;

const styles = StyleSheet.create({});
