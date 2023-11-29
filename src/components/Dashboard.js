import React, { useState } from 'react';

const Dashboard = () => {
  const [showUnanswered, setShowUnanswered] = useState(true);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
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
          <ul className="list-disc pl-6 mt-2">
            {/* TODO: filter new questions unanswered */}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mt-4">Answered Questions</h2>
          <ul className="list-disc pl-6 mt-2">
            {/* TODO: filter new questions answered */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
