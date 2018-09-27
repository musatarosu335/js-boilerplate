import { combineReducers } from 'redux';
import test from './test';

const indexReducer = combineReducers({
  test,
});

// Storeのリセット用
const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_ALL_STATE') {
    // eslint-disable-next-line
    state = undefined;
  }
  return indexReducer(state, action);
};

export default rootReducer;
