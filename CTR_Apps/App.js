import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

test;

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuLogin"
          component={MenuLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuKomik"
          component={MenuKomik}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View>
        <ImageBackground
          source={require('./src/image/image14.png')}
          style={{height: 170, width: 401}}>
          <View style={{alignItems: 'center', paddingTop: 70}}>
            <Image
              source={require('./src/image/ctr.png')}
              style={{height: 50, width: 321, alignItems: 'center'}}></Image>
          </View>
        </ImageBackground>
      </View>

      <View>
        <Image
          source={require('./src/image/Logoapk.png')}
          style={{height: 310, width: 401}}></Image>
      </View>
      <View>
        <ImageBackground
          source={require('./src/image/image16.png')}
          style={{height: 240, width: 401}}>
          <View style={{paddingTop: 45}}>
            <View style={{paddingHorizontal: 30}}>
              <Button
                title="Login"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuLogin')}
              />
            </View>
            <View style={{padding: 2}}></View>
            <View style={{paddingHorizontal: 30}}>
              <Button
                title="Guest"
                color="#211D1D"
                onPress={() => navigation.navigate('MenuKomik')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

function MenuLogin({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View>
        <ImageBackground
          source={require('./src/image/image14.png')}
          style={{height: 170, width: 401}}>
          <View style={{alignItems: 'center', paddingTop: 70}}></View>
        </ImageBackground>
      </View>

      <View>
        <ImageBackground
          source={require('./src/image/background1.png')}
          style={{height: 310, width: 401}}>
          <View style={{marginHorizontal: 30, marginTop: 10, paddingTop: 30}}>
            <StatusBar backgroundColor="#727272" barStyle="light-content" />
            <TouchableOpacity
              style={{
                backgroundColor: '#211D1D',
                paddingVertical: 20,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./src/image/google1.png')}
                  style={{height: 40, width: 40}}></Image>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                    padding: 10,
                  }}>
                  {' '}
                  LOGIN DENGAN GOOGLE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 30, marginTop: 60}}>
            <StatusBar backgroundColor="#727272" barStyle="light-content" />
            <TouchableOpacity
              style={{
                backgroundColor: '#211D1D',
                paddingVertical: 9,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./src/image/facebook1.png')}
                  style={{height: 60, width: 30}}></Image>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                    padding: 20,
                  }}>
                  {' '}
                  LOGIN DENGAN FACEBOOK
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View>
        <ImageBackground
          source={require('./src/image/image16.png')}
          style={{height: 240, width: 401}}></ImageBackground>
      </View>
    </View>
  );
}

function MenuKomik({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          backgroundColor: '#383232',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          HOME
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          LATEST
        </Text>
      </View>

      <ScrollView>
        <View style={{}}>
          <Image
            source={require('./src/image/image19.png')}
            style={{height: 240, width: 400}}></Image>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ImageBackground
            source={require('./src/image/image14.png')}
            style={{height: 210, width: 401}}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  paddingHorizontal: 177,
                }}>
                {' '}
                HOT{' '}
              </Text>
            </View>
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
              <View>
                <View style={{paddingHorizontal: 10}}>
                  <Image
                    source={require('./src/image/manga1.png')}
                    style={{width: 110, height: 140}}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingHorizontal: 10,
                  }}>
                  Manga
                </Text>
              </View>
              <View>
                <View style={{paddingHorizontal: 10}}>
                  <Image
                    source={require('./src/image/manga1.png')}
                    style={{width: 110, height: 140}}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingHorizontal: 10,
                  }}>
                  Manga
                </Text>
              </View>
              <View>
                <View style={{paddingHorizontal: 10}}>
                  <Image
                    source={require('./src/image/manga1.png')}
                    style={{width: 110, height: 140}}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingHorizontal: 10,
                  }}>
                  Manga
                </Text>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
            source={require('./src/image/image16.png')}
            style={{height: 170, width: 401}}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  paddingHorizontal: 130,
                }}>
                {' '}
                RECOMENDED{' '}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: 'pink',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./src/image/home2.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>Home</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./src/image/favorite2.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
            Favorite
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./src/image/recent3.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
            Recent
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./src/image/Download2.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
            Download
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'brown',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 26,
            width: 26,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./src/image/Account2.png')}
            style={{height: 34, width: 34}}></Image>
          <Text style={{fontSize: 10, color: 'black', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
}
export default App;
