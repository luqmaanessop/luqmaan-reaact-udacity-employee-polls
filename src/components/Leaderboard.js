import React from 'react';
import {connect} from "react-redux";

const Leaderboard = ({users}) => {
    const mainLeaders = users.slice(0,3);
    const losers = users.slice(3);

    console.log("mainLeaders", mainLeaders);
    console.log("losers", losers);


  return (
    <div className="mt-10 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Leaderboard</h1>
      <div class="flex justify-center items-end space-x-8 mt-8">
        <div class="relative flex flex-col items-center justify-center">
            <div class="bg-green-500 w-32 h-32 rounded-full flex items-center justify-center">
                <img src={mainLeaders[0].avatarURL} alt="Profile" className="h-full w-full rounded-full overflow-hidden" />
            </div>
            <p class="text-md my-2 text-center font-bold">First</p>
            <p class="text-sm my-2 text-center">Question count: {mainLeaders[0].questions.length}</p>
            <p class="text-sm my-2 text-center">Answer count: {Object.keys(mainLeaders[0].answers).length}</p>
        </div>
        <div class="relative flex flex-col items-center justify-center">
            <div class="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center">
                <img src={mainLeaders[1].avatarURL} alt="Profile" className="h-full w-full rounded-full overflow-hidden" />
            </div>
            <p class="text-md my-2 text-center font-bold">Second</p>
            <p class="text-sm my-2 text-center">Question count: {mainLeaders[1].questions.length}</p>
            <p class="text-sm my-2 text-center">Answer count: {Object.keys(mainLeaders[1].answers).length}</p>
        </div>
        <div class="relative flex flex-col items-center justify-center">
            <div class="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
                <img src={mainLeaders[2].avatarURL} alt="Profile" className="h-full w-full rounded-full overflow-hidden" />
            </div>
            <p class="text-sm my-2 text-center font-bold">Third</p>
            <p class="text-sm my-2 text-center">Question count: {mainLeaders[2].questions.length}</p>
            <p class="text-md my-2 text-center">Answer count: {Object.keys(mainLeaders[2].answers).length}</p>

        </div>
        </div>

        <h2  className='text-lg mb-2 mt-8 font-bold'>Loserboard:</h2>
        <table className="w-full border-collapse">
            <thead className="bg-gray-200">
            <tr>
                <th className="py-2 px-4 border text-left">Position</th>
                <th className="py-2 px-4 border text-left">User</th>
                <th className="py-2 px-4 border text-left">Polls Answered</th>
                <th className="py-2 px-4 border text-left">Polls Created</th>
            </tr>
            </thead>
            <tbody>
            {losers.map((user, index) => (

                <tr key={user.id} className="border text-left">
                <td className="py-2 px-4">
                    {index + 4}
                </td>
                <td className="py-2 px-4">
                    <div className='flex items-center'>
                    <img src={user.avatarURL} alt="Avatar Icon" className="h-8 w-8 mr-2 rounded-full overflow-hidden" />
                    <span className="font-bold">{user.name}</span>
                    </div>
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

