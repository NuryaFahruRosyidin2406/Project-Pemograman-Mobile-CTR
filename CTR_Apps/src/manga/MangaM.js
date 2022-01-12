import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MangaM = () => {
  // penggunaan api
  const [manga3, setManga3] = React.useState([]);

  useEffect(() => {
    getManga3();
  });

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
  // penggunaan api

  return (
    <View>
      <FlatList
        data={manga3}
        renderItem={({item}) => (
          <View style={{marginRight: 12, marginVertical: 10}}>
            <View>
              <Image
                source={require('../image/Manga3/jujutsubg.png')}
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

export default MangaM;

const styles = StyleSheet.create({});
