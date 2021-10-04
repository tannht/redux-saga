import * as taskApis from "../apis/task";
import * as Type from "../constants/task";
export const fetchListTask = () => {
  return {
    type: Type.FETCH_TASK,
  };
};
export const fetchListTaskSuccess = (data) => {
  return {
    type: Type.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskError = (error) => {
  return {
    type: Type.FETCH_TASK_FAIL,
    payload: {
      error,
    },
  };
};
export const fetchListTaskRequest = () => {
  return (dispatch) => {
    taskApis
      .getList()
      .then((res) => {
        const { data } = res;
        dispatch(fetchListTaskSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchListTaskError(error));
      });
  };
};
export const filterTask = (keyword) => ({
  type: Type.FILTER_TASK,
  payload: {
    keyword,
  },
});
export const filterTaskSuccess = (data) => ({
  type: Type.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});
