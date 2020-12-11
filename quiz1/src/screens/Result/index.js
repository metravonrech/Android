import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground, Button,
} from 'react-native';
import Pie from 'react-native-pie'
import { useSelector } from 'react-redux';
import * as triviaSelectors from '../../resourses/trivia/trivia.selectors';
import * as triviaActions from '../../resourses/trivia/trivia.actions';
import { useDispatch } from 'react-redux';

const Result = ({route,navigation}) => {
  const user = useSelector(triviaSelectors.getCurrentUser)
  const dispatch = useDispatch();
  const { wrongAns, length } = route.params;
  dispatch(triviaActions.AddUserResult(user,length - wrongAns))
  const percentage = ((length - wrongAns) / length) * 100

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#f9dbd2'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#1b1f22'}}>
        <View style={styles.container}>
            <View style={styles.top}>
              <View style={{ width: 175, alignItems: 'center', marginBottom: 80 }}>
                <Pie
                  radius={80}
                  innerRadius={60}
                  sections={[
                    {
                      percentage: percentage,
                      color: '#ed8021',
                    },
                  ]}
                  dividerSize={6}
                  strokeCap={'butt'}
                />
                <View
                  style={styles.gauge}
                >
                  <Text
                    style={styles.gaugeText}
                  >
                    {percentage}%
                  </Text>
                </View>
              </View>
              <Text style={styles.gaugeText}>You scored {length - wrongAns}/{length}</Text>
              <TouchableOpacity
                style={styles.buttonInput}
                onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.buttonText}>{'Start new game'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonInput}
                onPress={() => navigation.navigate('AllResults')}>
                <Text style={styles.buttonText}>{'See all the results'}</Text>
              </TouchableOpacity>
            </View>
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
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  top: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 100,
  },
  bottom: {
    flex: 1,
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
    marginTop: 80,
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
