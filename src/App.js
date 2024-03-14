import { useEffect } from 'react';

import {handleInitialData} from "./actions/shared";
import {connect, useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";

import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Nav from './components/Nav';
import NewPoll from './components/NewPoll';
import PollPage from './components/PollPage';
import Error404 from "./components/404";
import checkLoggedIn from "./components/LoginForm"

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(checkLoggedIn)

  useEffect(() => {
      dispatch(handleInitialData());
  });
  return (
    <div className="App">
      {loggedIn && <Nav />}
            <Routes>
                <Route path="/login" exact element={<LoginForm/>}/>
                <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/leaderboard" exact element={<PrivateRoute><Leaderboard/></PrivateRoute>}/>
                <Route path="/questions/:id" element={<PrivateRoute><PollPage/></PrivateRoute>}/>
                <Route path="/add" exact element={<PrivateRoute><NewPoll/></PrivateRoute>}/>
                <Route path="/404" exact element={<Error404/>}/>
            </Routes>
    </div>
  );
}

export default App;
