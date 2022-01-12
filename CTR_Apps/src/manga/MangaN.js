import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MangaN = () => {
  // penggunaan api
  const [manga4, setManga4] = React.useState([]);

  useEffect(() => {
    getManga4();
  });

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
  // penggunaan api

  return (
    <View>
      <FlatList
        data={manga4}
        renderItem={({item}) => (
          <View style={{marginRight: 12, marginVertical: 10}}>
            <View>
              <Image
                source={require('../image/image19.png')}
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

export default MangaN;

const styles = StyleSheet.create({});
