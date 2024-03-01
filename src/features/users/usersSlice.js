import { createSlice } from '@reduxjs/toolkit';

// import { RECEIVE_USERS, ADD_QUESTION_USER, ADD_ANSWER_USER } from "../../actions/users";

// export default function users(state = {}, action) {
//   switch (action.type) {
//     case RECEIVE_USERS:
//       return {
//         ...state,
//         ...action.users,
//       };
//     case ADD_QUESTION_USER:
//       return {
//         ...state,
//         [action.author]: {
//           ...state[action.author],
//           questions: state[action.author].questions.concat(action.qid)
//         }
//       };
//       case ADD_ANSWER_USER:
//         return {
//           ...state,
//           [action.authedUser]: {
//             ...state[action.authedUser],
//             answers: {
//               ...state[action.authedUser].answers,
//               [action.qid]: action.answer
//             }
//           }
//         };
//     default:
//       return state;
//   }
// }

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
      state[action.payload.user].questions.concat(action.payload.question)
    },
    ADD_ANSWER_USER(state, action) {
      state[action.payload.user].answers[action.payload.question] = action.payload.answer
    }
  }
})

export const { ADD_ANSWER_USER, RECEIVE_USERS, ADD_QUESTION_USER } = users.actions;

export default users.reducer
