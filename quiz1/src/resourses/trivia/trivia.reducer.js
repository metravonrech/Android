export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_NAME = 'SET_NAME';

const initialState = {
  questions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: [...action.payload]
      };
    case SET_NAME:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
