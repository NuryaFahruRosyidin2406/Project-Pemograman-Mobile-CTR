import React from 'react';
import {StyleSheet, Text, View, Image,Button} from 'react-native';

const MangaC = () => {
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
    <View style={{marginRight: 12, marginVertical: 10}}>
      <View>
        <Image
          source={require('../image/Mangag1/ReincarnationoftheMurimClanFormerRanker.png')}
          style={{width: 110, height: 140}}></Image>
      </View>
      <View style={{}}>
          <View style={{paddingHorizontal: 0}}>
            <Button
              title="Reinc..."
              color="#211D1D"
              onPress={() => navigation.navigate('MenuLogin')}
            />
            </View>
      </View> 
    </View>
  );
};

export default MangaC;

const styles = StyleSheet.create({});
