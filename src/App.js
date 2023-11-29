import { useEffect } from 'react';

import {handleInitialData} from "./actions/shared";
import {connect} from "react-redux";

import LoginForm from './components/LoginForm';
import Card from './components/Card';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Nav from './components/Nav';
import NewPoll from './components/NewPoll';
import PollPage from './components/PollPage';

function App({dispatch, loggedIn}) {
  useEffect(() => {
      dispatch(handleInitialData());
  });
  return (
    <div className="App">
      {loggedIn && <Nav />}
      <LoginForm />
      <Card />
      <Dashboard />
      <Leaderboard />
      <NewPoll />
      <PollPage />
    </div>
  );
}
const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
