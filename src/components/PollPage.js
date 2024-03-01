import { Navigate, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import { handleAddAnswer } from "../actions/questions";
import clsx from 'clsx';

export const calculateVotes = (option, question) => {
  const numVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  switch (option) {
    case "1":
      return (question.optionOne.votes.length / numVotes) * 100;
    case "2":
      return (question.optionTwo.votes.length / numVotes) * 100;
    default:
      return "";
  }
};

const PollPage = ({ dispatch, authedUser, question, author }) => {
  const navigate = useNavigate();
  const [option, setOption] = useState("");
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    question && setVoted(question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id))
  }, [authedUser.id, question]);

  if (!authedUser || !question || !author) {
    return <Navigate to="/404" />;
  }

  const handleOptionSelect = (e) => {
    setOption(e.target.value);
    dispatch(handleAddAnswer(question.id, e.target.value));
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-bold mt-9 text-center mb-2">
        {author.id}'s Poll
      </h1>

      <div className="flex justify-center">
        <img
          src={author.avatarURL}
          alt="Profile"
          className="h-24 w-24 rounded-full overflow-hidden"
        />
      </div>

      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
      </div>

      <div className="flex mt-4 space-between">
        <div className="block mx-4">
            <h3 className="font-bold text-md">Option 1:</h3>
            <p className="mb-2">{question.optionOne.text}</p>
            {voted && (
                <p className={clsx("text-md font-medium", question.optionOne.votes.length < question.optionTwo.votes.length ? "text-red-600" : "text-green-600")}>
                Votes: {question.optionOne.votes.length} (
                {calculateVotes("1", question)}) %
                </p>
            )}
        </div>
        <div className="block mx-4">
            <h3 className="font-bold text-md">Option 2:</h3>
            <p className="mb-2">{question.optionTwo.text}</p>
            {voted && (
                <p className={clsx("text-md font-medium", question.optionOne.votes.length > question.optionTwo.votes.length ? "text-red-600" : "text-green-600")}>
                Votes: {question.optionTwo.votes.length} (
                {calculateVotes("2", question)}) %
                </p>
            )}
        </div>
      </div>

        { !voted && <>
            <label htmlFor="option" className="mt-8 mx-4 block text-blue-700">
                Answer:
            </label>
            <select
                value={option}
                onChange={handleOptionSelect}
                name="answer"
                id="answer"
                data-testid="voteAnswer"
                className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 mx-4 mt-2"
            >
                <option value="" disabled>
                Select an Option
                </option>
                <option key={'optionOne'} value={'optionOne'}>
                Option One
                </option>
                <option key={'optionTwo'} value={'optionTwo'}>
                Option Two
                </option>
            </select>
        </>}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    const author = Object.values(users).find(
      (user) => user.id === question.author
    );
    return { authedUser, question, author };
  } catch (e) {
    return <Navigate to="/404" />;
  }
};

export default connect(mapStateToProps)(PollPage);
