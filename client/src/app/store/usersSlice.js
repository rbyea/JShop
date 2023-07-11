import { createAction, createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import authService from "../services/auth.service";
import history from "../utils/history";
import userService from "../services/user.service";
import { generationAuthError } from "../utils/generateAuthError";

const initialState = localStorageService.getTokenKey()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getLocalIdKey() },
      isLoggedIn: true,
      dataLoader: false,
      isLoadingReg: false
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoader: false,
      isLoadingReg: false
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
      state.isLoadingReg = true;
    },
    usersReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoader = true;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
      state.isLoadingReg = false;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoadingReg = false;
    },
    userCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
      state.isLoadingReg = false;
    },
    userRequestedForm: (state) => {
      state.isLoadingReg = true;
    },
    userLogOut: (state) => {
      state.entities = [];
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoader = false;
    }
  }
});

const { actions, reducer: usersReducer } = usersSlice;
const {
  usersRequested,
  usersRequestFailed,
  usersReceived,
  authRequestSuccess,
  userRequestedForm,
  authRequestFailed,
  userCreated,
  userLogOut
} = actions;

const authRequested = createAction("users/authRequested");
const createUserFailed = createAction("user/createUserFailed");

function createUser(payload) {
  return async function (dispatch) {
    dispatch(userRequestedForm());
    try {
      const { content } = await userService.create(payload);
      dispatch(userCreated(content));
      history.push("/");
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

export const login =
  ({ payload, redirect }) =>
  async (dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    dispatch(userRequestedForm());
    try {
      const data = await authService.join({ email, password });
      dispatch(authRequestSuccess({ userId: data.localId }));

      localStorageService.setTokens(data);

      history.push(redirect);
    } catch (error) {
      const { code, message } = error.response.data.error;

      if (code === 400) {
        const errorMessage = generationAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(generationAuthError(error.message)));
      }
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

export const logOut = () => (dispatch) => {
  localStorageService.removeAllKey();
  dispatch(userLogOut());
  history.push("/");
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getLoadingUsersStatus = () => (state) => state.users.isLoading;
export const getLoadingForm = () => (state) => state.users.isLoadingReg;
export const getDataStatus = () => (state) => state.users.dataLoader;
export const getCurrentUser = (payload) => (state) => {
  return state.users.entities
    ? state.users.entities.find((user) => user._id === payload)
    : null;
};
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getLoginAuthError = () => (state) => state.users.error;

export default usersReducer;
