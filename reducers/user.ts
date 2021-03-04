import {
  createPromiseThunk,
  handleAsyncActions,
  userReducerUtils,
} from "../utils/asyncUtils";
import axios, { AxiosError } from "axios";
import * as userAPI from "../core/api/user";

export type ReqData = {
  provider: "local" | "google" | "kakao" | "naver";
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: "user" | "provider" | "admin";
  admin: boolean;
};

export const SIGN_UP = "user/SIGN_UP" as const;
export const SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS" as const;
export const SIGN_UP_ERROR = "user/SIGN_UP_ERROR" as const;

export const STORE_FIRST_SIGNUP = "user/STORE_SIGNUP" as const;
export const STORE_FIRST_SIGNUP_DATA = "user/STORE_SIGNUP_DATA" as const;
export const STORE_SIGNUP_DATA_ERROR = "user/STORE_SIGNUP_DATA_ERROR" as const;

export const LOGIN_METHOD = "user/LOGIN_METHOD" as const;
export const LOGIN_METHOD_SUCCESS = "user/LOGIN_METHOD_SUCCESS" as const;
export const LOGIN_METHOD_ERROR = "user/LOGIN_METHOD_ERROR" as const;

export const LOG_IN = "user/LOG_IN" as const;
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS" as const;
export const LOG_IN_ERROR = "user/LOG_IN_ERROR" as const;

export const LOAD_MY_INFO = "user/LOAD_MY_INFO";
export const LOAD_MY_INFO_SUCCESS = "user/LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_ERROR = "user/LOAD_MY_INFO_ERROR";

export const IS_LOGIN = "user/IS_LOGIN";
export const IS_LOGIN_SUCCESS = "user/IS_LOGIN_SUCCESS";
export const IS_LOGIN_ERROR = "user/IS_LOGIN_ERROR";

export const storeFirstSignUp = () => ({ type: STORE_FIRST_SIGNUP });

export const storeFirstSignUpData = (payload) => ({
  type: STORE_FIRST_SIGNUP_DATA,
  payload,
});

export const loginMethod = (payload: "buyer" | "provider") => ({
  type: LOGIN_METHOD,
  payload,
});

export const isLoginRequest = () => ({ type: IS_LOGIN });
export const isLoginSuccess = () => ({ type: IS_LOGIN_SUCCESS });
export const isLoginError = () => ({ type: IS_LOGIN_ERROR });

export const signUpRequest = () => ({ type: SIGN_UP });
export const signUpSuccess = () => ({ type: SIGN_UP_SUCCESS });
export const signUpError = () => ({ type: SIGN_UP_ERROR });

export const loginRequest = () => ({ type: LOG_IN });
export const loginSuccess = () => ({ type: LOG_IN_SUCCESS });
export const loginError = () => ({ type: LOG_IN_ERROR });

export const loadMyInfoRequest = () => ({ type: LOAD_MY_INFO });
export const loadMyInfoSuccess = () => ({ type: LOAD_MY_INFO_SUCCESS });
export const loadMyInfoError = () => ({ type: LOAD_MY_INFO_ERROR });

export const signUPRequest = async (payload) => {
  await axios.post("/auth/signup", payload);
  return "";
};

type SignUpData = {
  loading: boolean;
  data: ReqData;
  error: AxiosError;
};

type LoginData = {
  loading: boolean;
  data: any;
  error: AxiosError;
};

export type meData = {
  loading: boolean;
  data: any;
  error: AxiosError;
};

export type UserState = {
  signUpData: SignUpData;
  loginData: LoginData;
  me: meData;
  isLogin: boolean;
};

export const initialState: UserState = {
  signUpData: userReducerUtils.initial(),
  loginData: userReducerUtils.initial(),
  me: userReducerUtils.initial(),
  isLogin: false,
};

export const signUp = createPromiseThunk({
  type: SIGN_UP,
  promiseCreator: signUPRequest,
});

export const loginThunk = createPromiseThunk({
  type: LOG_IN,
  promiseCreator: userAPI.login,
});

export const loadMyInfoThunk = createPromiseThunk({
  type: LOAD_MY_INFO,
  promiseCreator: userAPI.loadMyInfo,
});

export const isLoginCheckRequest = userAPI.isLogin;

const signUpReducer = handleAsyncActions(SIGN_UP, "signUpData");
const loginReducer = handleAsyncActions(LOG_IN, "me");
const loadMyInfoReducer = handleAsyncActions(LOAD_MY_INFO, "me");

export type UserAction =
  | ReturnType<typeof storeFirstSignUp>
  | ReturnType<typeof storeFirstSignUpData>
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpError>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginError>
  | ReturnType<typeof loadMyInfoRequest>
  | ReturnType<typeof loadMyInfoSuccess>
  | ReturnType<typeof loadMyInfoError>
  | ReturnType<typeof isLoginRequest>
  | ReturnType<typeof isLoginSuccess>
  | ReturnType<typeof isLoginError>;

export default function users(
  state: UserState = initialState,
  action: UserAction | any
): UserState {
  console.log(action.type);
  switch (action.type) {
    case SIGN_UP:
    case SIGN_UP_SUCCESS:
    case SIGN_UP_ERROR:
      return signUpReducer(state, action);

    case LOG_IN:
    case LOG_IN_SUCCESS:
    case LOG_IN_ERROR:
      return loginReducer(state, action);

    case LOAD_MY_INFO:
    case LOAD_MY_INFO_SUCCESS:
    case LOAD_MY_INFO_ERROR:
      return loadMyInfoReducer(state, action);

    case STORE_FIRST_SIGNUP_DATA:
      return {
        ...state,
        signUpData: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };

    case LOGIN_METHOD:
      return {
        ...state,
        signUpData: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };

    case IS_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: action.payload,
      };

    case IS_LOGIN_ERROR:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
}
