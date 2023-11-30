import React from 'react';
import {connect} from "react-redux";

const Leaderboard = ({users}) => {
  console.log(users);
  return (
    <div className="mt-10 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>

      <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border text-left">User</th>
            <th className="py-2 px-4 border text-left">Polls Answered</th>
            <th className="py-2 px-4 border text-left">Polls Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border text-left">
              <td className="py-2 px-4">
                <img src={user.avatarURL} alt="Profile" className="h-6 w-6 rounded-full overflow-hidden" />
                <span className="font-bold">{user.name}</span>
              </td>
              <td className="py-2 px-4">{Object.keys(user.answers).length}</td>
              <td className="py-2 px-4">{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({users}) => ({
  users: Object.values(users).sort((a, b) => (
    (Object.keys(b.answers).length + Object.keys(b.questions).length) -
    (Object.keys(a.answers).length + Object.keys(a.questions).length)
  )),
});

export default connect(mapStateToProps)(Leaderboard);
