import { combineReducers } from 'redux';
import trivia from './trivia/trivia.reducer';

const reducers = {
  trivia,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
