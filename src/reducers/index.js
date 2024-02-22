// DELETE THIS FILE AFTER READING
// - this file is no longer needed as redux toolkit does the reducer combining on its own when using the configureStore() method to setup the store, we no longer need to do this manually
import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";

export default combineReducers({
    authedUser,
    users,
    questions,
});
