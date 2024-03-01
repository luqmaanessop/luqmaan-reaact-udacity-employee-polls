import { RECEIVE_USERS } from "../features/users/usersSlice";
import { RECEIVE_QUESTIONS } from "../features/questions/questionsSlice";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(RECEIVE_USERS(users));
            dispatch(RECEIVE_QUESTIONS(questions));
        });
    };
}
