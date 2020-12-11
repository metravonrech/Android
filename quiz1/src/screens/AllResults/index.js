import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity, Button,
} from 'react-native';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import * as triviaSelectors from '../../resourses/trivia/trivia.selectors';
import firestore from '@react-native-firebase/firestore';
import { AdEventType, InterstitialAd, TestIds } from '@react-native-firebase/admob';
const resultsDb = firestore().collection('Results');

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'someId';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const AllResults = ({route, navigation}) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    if (results.length === 0) {
      resultsDb
        .get()
        .then((snap) =>{
          const results = [];
          snap.forEach((doc) => {
            results.push(doc.data())
          })
          let a = _.groupBy(results, 'userName')
          const b = Object.entries(a).map(([key, value]) => {
            return {
              userName: key,
              result: (_.sumBy(value, 'result')/value.length).toFixed(2)
            }

          })
          let g = b.sort((a, { result }) => a.result < result);
          setResults(g)
        })
    }

  }, [])

  const user = useSelector(triviaSelectors.getCurrentUser)


  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
        interstitial.show()
      }
    });

    interstitial.load();
    return () => {
      eventListener();
    };
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textInput}>{'All  users'}</Text>
            <View style={styles.tableRow}>
              <Text style={styles.header}>{'Name'}</Text>
              <Text style={styles.header}>{'Average Result'}</Text>
            </View>
            <View>
              {
                results.map((e, i) => (
                  <View key={i+i} style={[styles.tableRow, e.userName === user ? styles.selected : {}]}>
                    <Text>{e.userName}</Text>
                    <Text>{e.result}</Text>
                  </View>
                ))
              }
          </View>
          </ScrollView>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    color: 'white',
  },
  tableRow: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    padding: 20,
  },
  textInput: {
    color: 'red',
    fontWeight: '600',
    fontSize: 60,
    marginLeft: 67,
  },
  selected: {
    backgroundColor: '#E8E6D1',
  },
  header: {
    fontSize: 20,
  }
}
);

export default AllResults;
