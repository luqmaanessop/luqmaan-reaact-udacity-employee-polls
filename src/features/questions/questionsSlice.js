import { createSlice } from '@reduxjs/toolkit';

const questions = createSlice({
  name: 'questions',
  initialState: {},
  reducers: {
    RECEIVE_QUESTIONS(state, action) {
      // state is a Proxy object in JS which helps immer keep track of object mutations
      // you can do direct state mutations here now
      return {...state, ...action.payload}
    },
    ADD_QUESTION(state, action) {
      return { ...state, [action.payload.id]: action.payload}
    },
    ADD_ANSWER_QUESTION(state, action) {
      // Remember that there is only one payload argument, so you need to bundle it up correctly into an object yourself when calling the createSlice auto generated actions, then it will be inside the action.payload object to use, (IE. you cannot call this action with more than one argument (which will be the action argument and become available in the action.payload property)
      state[action.payload.question][action.payload.answer].votes.concat(action.payload.user)
    }
  }
})

export const { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER_QUESTION } = questions.actions

export default questions.reducer;
