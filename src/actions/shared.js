import { receiveUsers } from "./users";
import { RECEIVE_QUESTIONS } from "../features/questions/questionsSlice";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(RECEIVE_QUESTIONS(questions));
        });
    };
}
