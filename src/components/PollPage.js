import {Navigate, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {handleAddAnswer} from "../actions/questions";

export const calculateVotes = (option, question) => {
    const numVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
        case "1":
            return question.optionOne.votes.length / numVotes * 100;
        case "2":
            return question.optionTwo.votes.length / numVotes * 100;
        default:
            return "";
    }
};

const PollPage = ({dispatch, authedUser, question, author}) => {
    const navigate = useNavigate();

    if (!authedUser || !question || !author) {
        return <Navigate to="/404"/>;
    }

    const voted1 = question.optionOne.votes.includes(authedUser.id);
    const voted2 = question.optionTwo.votes.includes(authedUser.id);
    const voted = voted1 || voted2;

    const handleOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <h1 className="text-3xl font-bold mt-9 text-center mb-2">{author.id}'s Poll</h1>

            <div className="flex justify-center">
                <img src={author.avatarURL} alt="Profile" className="h-24 w-24 rounded-full overflow-hidden" />
            </div>

            <div className="flex justify-center">
                <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

                <button disabled={voted} onClick={handleOptionOne}
                    className={"p-2 block rounded-xl  hover:shadow-xl transition" + (voted1 ? ' bg-green-300' : '')}
                >
                    <div>
                        <p className="font-bold mb-2">{question.optionOne.text}</p>
                        {!voted &&
                        <p className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Click</p>
                        }
                        {voted &&
                        <p className="text-xs">Votes: {question.optionOne.votes.length} ({calculateVotes("1", question)}) %</p>
                        }
                    </div>
                </button>

                <button disabled={voted} onClick={handleOptionTwo}
                    className={"p-2 rounded-xl  hover:shadow-xl transition" + (voted2 ? ' bg-green-400' : '')}
                >
                     <div>
                        <p className="font-bold mb-2">{question.optionTwo.text}</p>
                        {!voted &&
                        <p className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Click</p>
                        }
                        {voted &&
                        <p className="text-xs">Votes: {question.optionTwo.votes.length} ({calculateVotes("2", question)}) %</p>
                        }
                    </div>
                </button>
            </div>
        </div>
    );
};
const mapStateToProps = ({authedUser, users, questions}) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return {authedUser, question, author};
    } catch (e) {
        return <Navigate to="/404"/>;
    }
};

export default connect(mapStateToProps)(PollPage);
