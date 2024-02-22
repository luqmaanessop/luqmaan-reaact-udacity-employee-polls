import { configureStore } from '@reduxjs/toolkit'

import logger from "./middleware/logger";
import authedUser from "./reducers/authedUser";
import questions from "./reducers/questions";
import users from "./reducers/users";


const store = configureStore({reducer: {
  authedUser,
  questions,
  users
}, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)});

export default store;
