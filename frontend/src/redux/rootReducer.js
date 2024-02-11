import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

//slices
import appReducer from './slices/app';

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    //   whitelist: [],
    //   blacklist: [],
  };

  const rootReducer = combineReducers({
    app: appReducer,
    // auth: authReducer,
    // conversation: conversationReducer,
    // audioCall: audioCallReducer,
    // videoCall: videoCallReducer,
  });
  
  export { rootPersistConfig, rootReducer };
  