import { configureStore } from '@reduxjs/toolkit'

import logger from "./middleware/logger";
import authedUser from "./features/auth/authSlice";
import questions from "./features/questions/questionsSlice";
import users from "./features/users/usersSlice";


const store = configureStore({reducer: {
  authedUser,
  questions,
  users
}, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)});

export default store;
