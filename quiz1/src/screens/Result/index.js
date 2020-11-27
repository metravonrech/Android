import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const gamewonImage = require('../../assets/images/gamewon.jpg');

const Result = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#f9dbd2'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#1b1f22'}}>
        <View style={styles.container}>
          <ImageBackground source={gamewonImage} style={styles.bg_image}>
            <View style={styles.top}>
              <Text style={styles.gameStatus}>You Won</Text>
              <TouchableOpacity
                style={styles.buttonInput}
                onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.buttonText}>{'Start new game'}</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
  },
  top: {
    flex: 1,
    // backgroundColor: '#f9dbd2',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    // backgroundColor: '#1b1f22',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
  },
  buttonInput: {
    width: 300,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#47ed4f',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    margin: 8,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  bg_image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Result;
