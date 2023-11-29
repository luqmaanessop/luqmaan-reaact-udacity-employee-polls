import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import {handleLogin} from "../actions/authedUser";

const Login = ({dispatch, loggedIn}) => {
    const [username, setUsername] = useState("sarahedo");
    const [password, setPassword] = useState("password123");

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(handleLogin(username, password));
      setUsername("");
      setPassword("");
    };

    return (<div className="bg-blue-100 p-6 rounded-md">
    <h1 className="text-2xl mb-4 text-center">Login:</h1>
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="username" className="block text-blue-700">Username</label>
        <input
          value={username}
          onChange={handleUsername}
          type="text"
          name="username"
          id="username"
          data-testid="username"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-blue-700">Password</label>
        <input
          value={password}
          onChange={handlePassword}
          type="password"
          name="password"
          id="password"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Login
      </button>
    </form>
  </div>

    );
};

const mapStateToProps = ({authedUser}) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);