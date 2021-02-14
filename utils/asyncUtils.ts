import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  UserAction,
  UserState,
} from "../reducers/user";

type createPromiseThunkInput = {
  type: string;
  promiseCreator?: (param: any) => void;
};

export const userReducerUtils = {
  initial: (data: any = null) => ({
    data,
    loading: false,
    error: null,
  }),
  loading: (prevState: any = null) => ({
    data: prevState,
    loading: false,
    error: null,
  }),
  success: (data) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error) => ({
    data: null,
    loading: false,
    error,
  }),
};

export const createPromiseThunk = ({
  type,
  promiseCreator,
}: createPromiseThunkInput) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (param: any) => async (dispatch) => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (err) {
      console.error(err.response.data);
      dispatch({
        type: ERROR,
        payload: err,
        error: true,
      });
    }
  };
};

export const handleAsyncActions = (type: string, key: string) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state: UserState, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: userReducerUtils.loading(),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: userReducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: userReducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
