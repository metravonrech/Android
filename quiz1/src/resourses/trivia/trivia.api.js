import { GET_QUESTIONS } from './trivia.reducer';
import firestore from '@react-native-firebase/firestore';

const usersDb = firestore().collection('Users');
const resultsDb = firestore().collection('Results');

export const getQuestions = async (id) => {
  return await (await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')).json();
};

export const addNewUser = async (name) => {
  await usersDb.add({name}).then(() => {
    console.log("User is added")
  });
};

export const addUserResult = async (userName, result) => {
  await resultsDb.add({userName, result}).then(() => {
    console.log("Result is added")
  });
};
