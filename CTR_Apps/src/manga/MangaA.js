import React from 'react';
import {StyleSheet, Text, View, Image,Button, ImageBackground} from 'react-native';

const MangaA = () => {
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
      <View style={{}}>
        <ImageBackground
          source={require('../image/Mangag1/BokunoHeroAcademia.png')}
          style={{width: 110, height: 140}}></ImageBackground>
          
      <View style={{}}>
          <View style={{paddingHorizontal: 0}}>
            <Button
              title="Boku No..."
              color="#211D1D"
              onPress={() => navigation.navigate('MenuLogin')}
            />
          </View>
          </View>
      </View>




    </View>
  );
};

export default MangaA;

const styles = StyleSheet.create({});
