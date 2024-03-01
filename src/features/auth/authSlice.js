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
