import {
  createPromiseThunk,
  handleAsyncActions,
  userReducerUtils,
} from "../utils/asyncUtils";
import axios, { AxiosError } from "axios";
import * as userAPI from "../core/api/user";
import { ReqData } from "../pages/signup/second";

export const SIGN_UP = "user/SIGN_UP" as const;
export const SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS" as const;
export const SIGN_UP_ERROR = "user/SIGN_UP_ERROR" as const;

export const STORE_FIRST_SIGNUP = "user/STORE_SIGNUP" as const;
export const STORE_FIRST_SIGNUP_DATA = "user/STORE_SIGNUP_DATA" as const;
export const STORE_SIGNUP_DATA_ERROR = "user/STORE_SIGNUP_DATA_ERROR" as const;

export const LOG_IN = "user/LOG_IN" as const;
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS" as const;
export const LOG_IN_ERROR = "user/LOG_IN_ERROR" as const;

export const storeFirstSignUp = () => ({ type: STORE_FIRST_SIGNUP });

export const storeFirstSignUpData = (payload) => ({
  type: STORE_FIRST_SIGNUP_DATA,
  payload,
});

export const signUpRequest = () => ({ type: SIGN_UP });
export const signUpSuccess = () => ({ type: SIGN_UP_SUCCESS });
export const signUpError = () => ({ type: SIGN_UP_ERROR });

export const loginRequest = () => ({ type: LOG_IN });
export const loginSuccess = () => ({ type: LOG_IN_SUCCESS });
export const loginError = () => ({ type: LOG_IN_ERROR });

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

type ReducerUtils = {
  loading: boolean;
  data: ReqData;
  error: any;
};

export type UserState = {
  signUpData: SignUpData;
  loginData: LoginData;
};

export const initialState: UserState = {
  signUpData: userReducerUtils.initial(),
  loginData: userReducerUtils.initial(),
};

export const signUp = createPromiseThunk({
  type: SIGN_UP,
  promiseCreator: signUPRequest,
});

export const loginThunk = createPromiseThunk({
  type: LOG_IN,
  promiseCreator: userAPI.login,
});

const signUpReducer = handleAsyncActions(SIGN_UP, "signUpData");
const loginReducer = handleAsyncActions(LOG_IN, "loginData");

export type UserAction =
  | ReturnType<typeof storeFirstSignUp>
  | ReturnType<typeof storeFirstSignUpData>
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpError>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginError>;

export default function users(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_UP_SUCCESS:
    case SIGN_UP_ERROR:
      return signUpReducer(state, action);

    case LOG_IN:
    case LOG_IN_SUCCESS:
    case LOG_IN_ERROR:
      return loginReducer(state, action);

    case STORE_FIRST_SIGNUP_DATA:
      return {
        ...state,
        signUpData: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };

    default:
      return state;
  }
}
