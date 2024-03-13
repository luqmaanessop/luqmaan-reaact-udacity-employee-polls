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
      // use a temp variable here so the [] works without doing this the proxy object gets confused and cant keep track of the changes trying to be made. Try and only use one [] in a mutation like this.
      const userState = state[user];
      // Then do the mutation with the temp variable
      userState.answers[question] = answer;
    }
  }
})

export const { ADD_ANSWER_USER, RECEIVE_USERS, ADD_QUESTION_USER } = users.actions;

export default users.reducer
