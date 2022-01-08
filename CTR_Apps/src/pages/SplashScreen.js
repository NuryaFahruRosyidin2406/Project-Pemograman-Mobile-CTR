import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
} from 'react-native';
import {Component} from 'react/cjs/react.production.min';
import {StackActions, stackActions} from '@react-navigation/native';

class SplashScreen extends Component {
  _possibleConstructorReturn(props) {
    this.state = {};
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Login'));
    }, 3000);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <ImageBackground
            source={require('../image/image14.png')}
            style={{height: 170, width: 401}}>
            <View style={{alignItems: 'center', paddingTop: 70}}>
              <Image
                source={require('../image/ctr.png')}
                style={{height: 50, width: 321, alignItems: 'center'}}></Image>
            </View>
          </ImageBackground>
        </View>

        <View>
          <Image
            source={require('../image/Logoapk.png')}
            style={{height: 310, width: 401}}></Image>
        </View>
        <View>
          <ImageBackground
            source={require('../image/image16.png')}
            style={{height: 240, width: 401}}></ImageBackground>
        </View>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({});
