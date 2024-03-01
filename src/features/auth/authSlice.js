// import {LOGOUT_AUTHED_USER, SET_AUTHED_USER} from "../../actions/authedUser";

// export default function authedUser(state = null, action) {
//   switch (action.type) {
//     case SET_AUTHED_USER:
//       return action.authedUser;
//     case LOGOUT_AUTHED_USER:
//       return null;
//     default:
//       return state;
//   }
// }

import { createSlice } from "@reduxjs/toolkit";

const authedUser = createSlice({
  name: 'authedUser',
  initialState: {},
  reducers: {
    SET_AUTHED_USER(state, action) {
      return { ...action.payload }
    },
    LOGOUT_AUTHED_USER(state, action) {
      return {}
    }
  }
})

export const { SET_AUTHED_USER, LOGOUT_AUTHED_USER } = authedUser.actions;

export default authedUser.reducer;
