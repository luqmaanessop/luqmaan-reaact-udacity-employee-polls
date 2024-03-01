import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {LOGOUT_AUTHED_USER} from '../features/auth/authSlice'

const Nav = ({dispatch, authedUserId, authedUserIcon}) => {
    return (
        <nav className="sticky top-0 flex items-center justify-between bg-blue-500 p-4">
            <div className="flex items-center">
							<img src={authedUserIcon} alt="Profile" className="mr-1 h-6 w-6 rounded-full overflow-hidden" /><span className="text-white" data-testid="user-information">User: {authedUserId}</span></div>
            <div className="flex">
                <Link to="/" className="text-white mr-4 hover:font-medium">Home</Link>
                <Link to="/leaderboard" className="text-white mr-4 hover:font-medium">Leaderboard</Link>
                <Link to="/add" className="text-white mr-4 hover:font-medium">New Poll</Link>
            </div>
            <button onClick={()=>{dispatch(LOGOUT_AUTHED_USER());}} className="text-white">Logout</button>
        </nav>
    );
};


const mapStateToProps = ({authedUser}) => ({
  authedUserId: authedUser.id,
  authedUserIcon: authedUser.avatarURL,
});


export default connect(mapStateToProps)(Nav);
