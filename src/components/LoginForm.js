import {connect} from "react-redux";
import {useState} from "react";
import {handleLogin} from "../actions/authedUser";
import {users} from '../utils/_DATA';

const Login = ({dispatch, loggedIn}) => {
    const [username, setUsername] = useState("");

    const handleUsername = (e) => {
        const value = e.target.value;
        console.log("value username:", value)
        setUsername(value);
    };


    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(handleLogin(username));
      setUsername("");
    };

    return (<div className="bg-blue-100 p-6 rounded-md">
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
