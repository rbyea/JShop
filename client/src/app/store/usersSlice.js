import { createAction, createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import authService from "../services/auth.service";
import history from "../utils/history";
import userService from "../services/user.service";

const initialState = localStorageService.getTokenKey()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getLocalIdKey() },
      isLoggedIn: true,
      dataLoader: false
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoader: false
    };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true;
    },
    usersRequestFailed: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    usersReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoader = true;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    }
  }
});

const { actions, reducer: usersReducer } = usersSlice;
const {
  usersRequested,
  usersRequestFailed,
  usersReceived,
  authRequestSuccess,
  authRequestFailed,
  userCreated
} = actions;

const authRequested = createAction("users/authRequested");
const userCreatedRequested = createAction("user/userCreatedRequested");
const createUserFailed = createAction("user/createUserFailed");

function createUser(payload) {
  return async function (dispatch) {
    dispatch(userCreatedRequested());
    try {
      const { content } = await userService.create(payload);
      dispatch(userCreated(content));
      history.push("/catalog");
    } catch (error) {
      dispatch(createUserFailed(error.message));
    }
  };
}

export const signUp =
  ({ email, password, ...rest }) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register({ email, password });
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ userId: data.localId }));
      dispatch(
        createUser({
          _id: data.localId,
          email,
          password,
          ...rest
        })
      );
    } catch (error) {
      dispatch(authRequestFailed(error.message));
    }
  };

export const loadUsersList = () => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const { content } = await userService.get();
    dispatch(usersReceived(content));
  } catch (error) {
    dispatch(usersRequestFailed(error.message));
  }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getLoadingUsersStatus = () => (state) => state.users.isLoading;

export default usersReducer;
