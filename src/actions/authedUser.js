import { SET_AUTHED_USER, LOGOUT_AUTHED_USER } from '../features/auth/authSlice'

// thunkware definitions
export function handleLogin(username) {
    return (dispatch, getState) => {
        const {users} = getState();

        const user = Object.values(users).find((user) => user.id === username);

        if (!!user) {
            dispatch(SET_AUTHED_USER(user));
        }
    };
}

export function handleLogout() {
    return (dispatch) => {
        return dispatch(LOGOUT_AUTHED_USER());
    };
}
