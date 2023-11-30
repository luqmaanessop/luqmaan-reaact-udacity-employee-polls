import React, { useState } from 'react';
import Card from "./Card";
import {connect} from "react-redux";

const Dashboard = ({authedUser, questions, users}) => {
  const [showUnanswered, setShowUnanswered] = useState(true);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard:</h1>

      <button
        onClick={() => setShowUnanswered(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
      >
        New Polls
      </button>
      <button
        onClick={() => setShowUnanswered(false)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Answered Polls
      </button>

      {showUnanswered ? (
        <div>
          <h2 className="text-xl font-semibold mt-4">New Questions</h2>
          <ul className="list-none mt-2">
                {questions
                    .filter((question) => (!question.optionOne.votes.includes(authedUser.id)
                    && !question.optionTwo.votes.includes(authedUser.id))).map((question) => (
                        <li key={question.id} className='mb-2'>
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mt-4">Answered Questions</h2>
          <ul className="list-none mt-2">
                {questions
                    .filter((question) => (question.optionOne.votes.includes(authedUser.id)
                    || question.optionTwo.votes.includes(authedUser.id))).map((question) => (
                        <li key={question.id} className='mb-2'>
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({authedUser, questions, users}) => ({
  authedUser,
  questions: Object.values(questions).sort(
      (a, b) => b.timestamp - a.timestamp
  ),
  users,
});

export default connect(mapStateToProps)(Dashboard);

