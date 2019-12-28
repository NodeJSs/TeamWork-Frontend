import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './user/user.reducer';
import feedReducer from './feed/feed.reducer'
const persistConfig = {
  key: "root",
  storage
};
const rootReducer = combineReducers({
  user:userReducer,
  feed:feedReducer
});
export default persistReducer(persistConfig, rootReducer);
