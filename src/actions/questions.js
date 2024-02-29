import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import {addAnswerUser, addQuestionUser} from "./users";
import { ADD_QUESTION, ADD_ANSWER_QUESTION } from '../features/questions/questionsSlice';


// Thunk functions - use it directly in the dispatch, do some sideeffects and then dispatch some other things from here
export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion(firstOption, secondOption, authedUser)
            .then((question) => {
                dispatch(ADD_QUESTION(question));
                dispatch(addQuestionUser(question))
            })
    };
}

export function handleAddAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        const submittedAnswer = {
            user: authedUser.id,
            question: questionId,
            answer: answer
        }

        return saveQuestionAnswer(authedUser.id, questionId, answer)
            .then(() => {
                dispatch(ADD_ANSWER_QUESTION(submittedAnswer));
                dispatch(addAnswerUser(authedUser.id, questionId, answer));
            });
    };
}
