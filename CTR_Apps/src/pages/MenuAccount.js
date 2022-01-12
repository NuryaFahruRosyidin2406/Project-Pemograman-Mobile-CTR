import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Button
} from 'react-native';

const MenuAccount = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#383232',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Account
          </Text>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../image/background2/0.75x/background2ldpi.png')}
            style={{flex: 1}}>
              <ImageBackground source={require('../image/ellipse.png')} style={{height:200}}> 
              <View style={{paddingTop:100}}>
              <Image source={require('../image/profil.png')} style={{width:130,height:130}}>
              </Image>
              </View>
              </ImageBackground>
              
           <View style={{paddingTop:90}}>
              <View style={{paddingTop:5,resizeMode: "contain",
            height: 50,
            width: 300}}>
              <Button
                title="Username"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuLogin')}
              />
              </View>

              <View style={{paddingTop:5,resizeMode: "contain",
            height: 50,
            width: 300}}>
              <Button
                title="Email"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuLogin')}
              />
              </View>

              <View style={{paddingTop:5,resizeMode: "contain",
            height: 50,
            width: 300}}>
              <Button
                title="Setting"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuBaca')}
              />
              </View>

              <View style={{paddingTop:5,resizeMode: "contain",
            height: 50,
            width: 300}}>
              <Button
                title="About us"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuLogin')}
              />
              </View>

              <View style={{paddingTop:5,resizeMode: "repeat",
            height: 50,
            width: 300}}>
              <Button
                title="Log Out"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuLogin')}
              />
              </View>
              </View>
            </ImageBackground>
        </View>
      </View>
    </>
  );
};



export default MenuAccount;

const styles = StyleSheet.create({ 
  container: {
  display: "flex",
  flexDirection: "vertical",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
  textAlign: "center"}
});
