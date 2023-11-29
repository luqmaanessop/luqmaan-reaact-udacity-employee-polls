import LoginForm from './components/LoginForm';
import Card from './components/Card';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Nav from './components/Nav';
import NewPoll from './components/NewPoll';
import PollPage from './components/PollPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <LoginForm />
      <Card />
      <Dashboard />
      <Leaderboard />
      <NewPoll />
      <PollPage />
    </div>
  );
}

export default App;
