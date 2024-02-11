import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch ,
   useSelector as useAppSelector ,
  } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootPersistConfig, rootReducer } from './rootReducer';


const store = configureStore({
 
    // reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,

      }),
  });

  const persistor = persistStore(store);
  const { Dispatch } = store;

const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();

export { store, persistor, Dispatch, useSelector, useDispatch };