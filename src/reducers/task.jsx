import * as Type from "../constants/task";
import { toastError } from "../helper/toast";
const initialState = {
  listTask: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.FETCH_TASK:
      return { ...state, listTask: [] };
    case Type.FETCH_TASK_SUCCESS:
       const { data } = action.payload;
      return { ...state, listTask: data };
    case Type.FETCH_TASK_FAIL:
      const { error } = action.payload;
      toastError(error);
      return { ...state, listTask: [] };
    case Type.FILTER_TASK_SUCCESS:
      
      return {
        ...state,
        listTask: data,
      };
    default:
      return state;
  }
};
export default reducer;
