
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
  ,Button,
  FlatList,
  TextInput
} from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';




const MenuDeskripsi = ({route}) => {
  
  const hotURL = "https://api.jikan.moe/v4/manga/";

  // const [data, setData] = useState({});
  const [imgbg, setImgBg] = useState('');
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [genre, setGenre] = useState([]);
  
  useEffect(() => {
    if(route.params?.mal_id){
      fetch(hotURL+route.params.mal_id)
        .then(response => response.json())
        .then(json => {
          setImgBg(json.data.images.jpg.large_image_url)
          setDesc(json.data.synopsis)
          setTitle(json.data.title)
          setImg(json.data.images.jpg.image_url)
          setGenre(json.data.genres)
          
         
        })
        .catch((error) => alert(error));
    }
  },);
  
  return (
      <View style={{flex: 1}}>
        <ScrollView>
        <View
          style={{
            backgroundColor: '#383232',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Deskripsi</Text>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../image/mangadis.png')}
            style={{flex: 1}}>
            <View>
              <ImageBackground source={{uri:imgbg}} style={{height:220,width:400}} >
              <View style={{height:180,width:140,paddingTop:120,paddingLeft:25}} >
                <Image source={{uri:img}} style={{height:180,width:140}}>
                </Image>
              </View>
              </ImageBackground>
            </View>
            <View style={{marginRight: 10, marginBottom: 15, marginLeft: 225,paddingTop:10}}>
              <View
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 50,
                }}
                >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {title}
                </Text>
              </View>
            </View>


            <View style={{borderRadius:20,height:30,backgroundColor:'white',borderBottomWidth:5,borderTopWidth:1}}>
                  <Text style={{color:'black',top:4,left:15,fontSize:13,fontWeight:'500'}}> Genre : {genre.map(g => g.name).join(', ')} </Text>
            </View>

            <View 
            style={{flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center',
            borderWidth:1,
            borderColor:'#777',
            padding:8,
            margin:10,
            width:200,position:'relative'}}>

              <TextInput placeholder=''></TextInput>

            </View>

            <View style={{paddingTop:10}}>
                <Text style={{fontSize:12,textAlign:'justify',}}>{desc}
                </Text>
                </View>


              

               <View style={{flexDirection:'column-reverse'}}>
                <View style={{marginRight: 12, marginBottom: 15, marginLeft: 259}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#383232',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                  marginTop:-100
                }}
                onPress={() => navigation.navigate('MenuDownload')}>
                  <Image source={require('../image/download.png')} ></Image>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Download
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{}}>
            <View style={{paddingTop:5,resizeMode: "contain",
            height: 50,
            width: 200}}>
              <Button
                title="Chapter 1"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuBaca')}
              />
              </View>
            
              <View style={{
            paddingTop:5,
            resizeMode: "contain",
            height: 50,
            width: 200,}}>
              <Button
                title="Back"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuLatest')}
                />
              </View>
      
                </View>
                </View>   
              

          </ImageBackground>
        </View>
        </ScrollView>

      </View>
    
  );
};

export default MenuDeskripsi;

const styles = StyleSheet.create({});
