import React from 'react';

const Leaderboard = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>

      <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          <tr className="">
            <th className="py-2 px-4 border">User</th>
            <th className="py-2 px-4 border">Polls Answered</th>
            <th className="py-2 px-4 border">Polls Created</th>
          </tr>
        </thead>
        <tbody className="">
          {
            // TODO: map over users and render td
          }
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
