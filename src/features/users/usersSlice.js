import { createSlice } from '@reduxjs/toolkit';

const users = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    RECEIVE_USERS(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
    ADD_QUESTION_USER(state, action) {
      state[action.payload.author].questions.concat(action.payload);
    },
    ADD_ANSWER_USER(state, action) {
      const { user, question, answer } = action.payload;
      const userState = state[user];
      userState.answers[question] = answer;
    }
  }
})

export const { ADD_ANSWER_USER, RECEIVE_USERS, ADD_QUESTION_USER } = users.actions;

export default users.reducer
