import {
  call,
  delay,
  fork,
  put,
  select,
  take,
  takeLatest
} from "redux-saga/effects";
import {
  fetchListTaskError,
  fetchListTaskSuccess
} from "../actions/task";
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants/index";
import * as taskTypes from "../constants/task";
function* watchFetchListTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  //=========== block ==========//
  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    //dispatch action fetchListTaskSuccess
    yield put(fetchListTaskSuccess(data));
  } else {
    //dispatch action fetchListTaskFail
    yield put(fetchListTaskError(data));
  }
}
function* watchCreateTaskAction() {
  yield true;
  console.log("Watching Create Tasks");
}
function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select((state) => state.task.listTask);
  const filterTask = list.filter((task) =>
    task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  );

  yield put(fetchListTaskSuccess(filterTask))
  
}
function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}
export default rootSaga;
