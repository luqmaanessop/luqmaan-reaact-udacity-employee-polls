import {useState} from "react";
import {handleLogin} from "../actions/authedUser";
import {users} from '../utils/_DATA';
import {Navigate} from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const checkLoggedIn = createSelector(
  (state)=>state.authedUser,
  (authedUser) => !!authedUser.id
)

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const loggedIn = useSelector(checkLoggedIn)

  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
  }

  const handleUsername = (e) => {
      const value = e.target.value;
      setUsername(value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username));
    setUsername("");
  };

  return (<div className="mt-10 bg-blue-100 p-6 rounded-md max-w-md mx-auto block">
  <h1 className="text-2xl mb-4 text-center">Login:</h1>
  <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
    <div>
      <label htmlFor="username" className="block text-blue-700">Username</label>
      <select
        value={username}
        onChange={handleUsername}
        name="username"
        id="username"
        data-testid="username"
        className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="" disabled>Select a user</option>
        {Object.keys(users).map((userId) => (
          <option key={userId} value={users[userId].id}>
            {users[userId].name}
          </option>
        ))}
      </select>
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      data-testid="submit-login"
    >
      Login
    </button>
  </form>
</div>

  );
};
export default Login;
