import {useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";

const PollPage = ({dispatch, authedUser, question, author}) => {
    const navigate = useNavigate();

    const handleOptionOne = (e) => {
        e.preventDefault();

        // TODO: dispatch something

        navigate("/");
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();

        // TODO: dispatch something
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold mt-9 text-center mb-2">{author.id}'s Poll</h1>

            <div className="flex justify-center">
                <img src={author.avatarURL} alt="Profile" className="h-24 w-24" />
            </div>

            <div className="flex justify-center">
                <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

                <button onClick={handleOptionOne}
                    className="p-2 rounded-xl  hover:shadow-xl transition"
                >
                    <div>
                        <p className="font-bold mb-2">{question.optionOne.text}</p>
                        <p className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Click</p>
                    </div>
                </button>

                <button onClick={handleOptionTwo}
                    className="p-2 rounded-xl"
                >
                    <div>
                        <p className="font-bold mb-2">{question.optionTwo.text}</p>
                        <p className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Click</p>
                    </div>
                </button>
            </div>
        </div>
    );
};
const mapStateToProps = ({authedUser, users, questions}) => {
    const question = Object.values(questions).find((question) => question.id === useParams().id);
    const author = Object.values(users).find((user) => user.id === question.author);
    return {authedUser, question, author};
};

export default connect(mapStateToProps)(PollPage);
