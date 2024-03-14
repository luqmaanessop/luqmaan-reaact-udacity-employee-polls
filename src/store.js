import { configureStore } from '@reduxjs/toolkit'

import logger from "./middleware/logger";
import localStorageMiddleware from "./middleware/localStorage";
import authedUser from "./features/auth/authSlice";
import questions from "./features/questions/questionsSlice";
import users from "./features/users/usersSlice";

const employeeStoreString = localStorage.getItem("employeeStore");
const employeeStore = JSON.parse(employeeStoreString) || undefined;

const store = configureStore({reducer: {
  authedUser,
  questions,
  users
},preloadedState: employeeStore,  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(localStorageMiddleware)});

export default store;
