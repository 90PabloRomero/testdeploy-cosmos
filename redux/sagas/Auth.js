import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {removeCookie, setCookie} from '../../util/session';
import {
  SIGNIN_USER,
  SIGNOUT_USER,
  SIGNUP_USER
} from "../../constants/ActionTypes";
import {showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess} from "../actions/Auth";
import getConfig from "next/config";
import { fetchWrapper } from "../../helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;

const createUserWithEmailPasswordRequest = async (email, password) =>
  await auth.createUserWithEmailAndPassword(email, password)
    .then(authUser => authUser)
    .catch(error => error);

const signInClientUserRequest = async (username, password) =>
  await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })
    .then(authUser => authUser)
    .catch(error => error);

function* createUserWithEmailPassword({payload}) {
  const {email, password} = payload;
  try {
    const signUpUser = yield call(createUserWithEmailPasswordRequest, email, password);
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
    } else {
      setCookie('user_id', signUpUser.user.uid);
      yield put(userSignUpSuccess(signUpUser.user.uid));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signInClientUser({payload}) {
  const {username, password} = payload;
  try {
    const signInUser = yield call(signInClientUserRequest, username, password);
    if (typeof signInUser === "string") {

      yield put(showAuthMessage(signInUser));
    } else {
      setCookie('user_id', signInUser.id);
      setCookie('user_role', signInUser.role);
      setCookie('token', signInUser.token);
      yield put(userSignInSuccess(signInUser));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signOut() {
  try {
    const signOutUser = null;
    if (signOutUser === null) {
      removeCookie('user_id');
      removeCookie('user_role');
      yield put(userSignOutSuccess(signOutUser));
    } else {
      yield put(showAuthMessage(signOutUser.message));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* createUserAccount() {
  yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

export function* signInUser() {
  yield takeEvery(SIGNIN_USER, signInClientUser);
}

export function* signOutUser() {
  yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
  yield all([fork(signInUser),
    fork(createUserAccount),
    fork(signOutUser)]);
}
