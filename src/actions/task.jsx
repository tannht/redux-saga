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
export const fetchListTaskError = (err) => {
  return {
    type: Type.FETCH_TASK_FAIL,
    payload: {
      err,
    },
  };
};
export const fetchListTaskRequest = () => {
  return (dispatch) => {
    taskApis
      .getList()
      .then((res) => {
          const {data} = res
        dispatch(fetchListTaskSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchListTaskError(err));
      });
  };
};
