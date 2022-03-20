import { combineReducers } from 'redux';
import dayStock from './dayStock';

const rootReducer = combineReducers({
  dayStock
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
