import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { useSelector } from 'react-redux';
import * as triviaSelectors from '../../resourses/trivia/trivia.selectors';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const adUnitId = __DEV__ ? TestIds.BANNER : 'someId';

const showToast = () => {
  ToastAndroid.showWithGravity(
    "Correct!",
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  );
};

const Question = ({navigation}) => {
  const colorIndex = getRandomInt(3);
  const questions = useSelector(triviaSelectors.getQuestions)
  const [state, setState] = useState({
    currentQn: 0,
    end: false,
    wrongAns: 0,
  });

  const handleAnswer = (selectedAns) => {
    const newState = {...state};
    if (selectedAns === questions[state.currentQn].correct_answer) {
      showToast()
      if (state.currentQn < questions.length - 1) {
        newState.currentQn = state.currentQn + 1;
      } else {
        newState.end = true;
      }
    } else {
      if (state.currentQn < questions.length - 1) {
        newState.currentQn = state.currentQn + 1;
        newState.wrongAns += 1;
      } else {
        newState.end = true;
      }
    }
    setState(newState);
  };

  useEffect(() => {
    if (state.end) {
      navigation.navigate('Result', {
        wrongAns: state.wrongAns,
        length: questions.length,
      });
    }
  }, [navigation, state]);

  return (
    <>
      <SafeAreaView
        style={[
          {flex: 0, backgroundColor: '#f9dbd2'},
          {backgroundColor: colors[state.currentQn]},
        ]}
      />
      <SafeAreaView
        style={[
          {flex: 1, backgroundColor: '#1b1f22'},
          {backgroundColor: colors[state.currentQn]},
        ]}>
        <View
          style={[
            styles.container,
            {backgroundColor: colors[state.currentQn]},
          ]}>
          <View style={styles.top}>
            <Text style={[styles.text, styles.currentQuestion]}>
              {state.currentQn + 1}/{questions.length}
            </Text>
            <Text style={[styles.text]}>
              {state.currentQn + 1}. {questions[state.currentQn].question}
            </Text>
          </View>
          <View style={styles.bottom}>
            {[...questions[state.currentQn].incorrect_answers, questions[state.currentQn].correct_answer].map((q, i) => (
              <TouchableOpacity
                style={[
                  styles.buttonInput,
                  {backgroundColor: colors[colorIndex]},
                ]}
                onPress={() => handleAnswer(q)}
                key={i}>
                <Text style={styles.buttonText}>{q}</Text>
              </TouchableOpacity>
            ))}

            <BannerAd
              unitId={adUnitId}
              size={BannerAdSize.FULL_BANNER}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const colors = ['#ffdc40', '#b697ff', '#196bfb'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
  },
  top: {
    flex: 1,
    backgroundColor: '#f9dbd2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  bottom: {
    flex: 1,
    backgroundColor: '#1b1f22',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
  currentQuestion: {
    color: '#888',
    marginBottom: 5,
  },
  buttonInput: {
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#47ed4f',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
});
export default Question;
