import { adminRoot, currentUser } from '../../constants/defaultValues';
import { removeCurrentUser, setCurrentUser } from '../../helpers/Utils';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from '../actions';

export const loginUser = (user, history) => async (dispatch) => {
  if (user.email === 'demo@gogo.com' && user.password === 'gogo123') {
    dispatch({
      type: LOGIN_USER,
      payload: { user, history },
    });
    const item = { uid: currentUser.id, ...currentUser };
    await setCurrentUser(item);
    history.push(adminRoot);
  } else {
    const message = 'err.response.data';
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: { message },
    });
  }
  // try {
  //   // const response = await api.post(`/login`, body, config);
  //   dispatch({
  //     type: LOGIN_USER,
  //     payload: { user, history },
  //   });
  //   history.push(adminRoot);
  //   // dispatch(loadUser());
  // } catch (err) {
  //   const message = err.response.data;
  //   dispatch({
  //     type: LOGIN_USER_ERROR,
  //     payload: { message },
  //   });
  // }
};

// export const loginUserSuccess = (user) => ({
//   type: LOGIN_USER_SUCCESS,
//   payload: user,
// });
// export const loginUserError = (message) => ({
//   type: LOGIN_USER_ERROR,
//   payload: { message },
// });

export const forgotPassword = (forgotUserMail, history) => ({
  type: FORGOT_PASSWORD,
  payload: { forgotUserMail, history },
});
export const forgotPasswordSuccess = (forgotUserMail) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: forgotUserMail,
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const resetPassword = ({ resetPasswordCode, newPassword, history }) => ({
  type: RESET_PASSWORD,
  payload: { resetPasswordCode, newPassword, history },
});
export const resetPasswordSuccess = (newPassword) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: newPassword,
});
export const resetPasswordError = (message) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { message },
});

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history },
});
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});
export const registerUserError = (message) => ({
  type: REGISTER_USER_ERROR,
  payload: { message },
});

export const logoutUser = (history) => async (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
    payload: { history },
  });
  await removeCurrentUser();
  history.push('/');
};
