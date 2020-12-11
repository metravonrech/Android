import { GET_QUESTIONS, SET_NAME } from './trivia.reducer';
import * as api from './trivia.api'
import firestore from '@react-native-firebase/firestore';

const db = firestore().collection('Users');

export const getQuestions = () => async (dispatch) => {
  const data = await api.getQuestions();
  dispatch({ type: GET_QUESTIONS, payload: data.results });
};

export const AddNewUser = (name) => async (dispatch) => {
  db.where('name', '==', name)
    .get()
    .then((snap) =>{
      const results = [];
      snap.forEach((doc) => {
        console.log('doc ', doc.data());
        results.push(doc.data())
      })
      if(results.length > 0){
        dispatch({ type: SET_NAME, payload: name });
      } else {
        api.addNewUser(name)
        dispatch({ type: SET_NAME, payload: name });
      }
    })
};

export const AddUserResult = (name, result) => async (dispatch) => {
  await api.addUserResult(name, result)
};
