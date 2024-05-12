import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./redux_middleware/Api_middleware";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./combinedReducers";
import { persistStore } from "redux-persist";
import { AuthstateSlice } from "./redux_slices/Authstate.slice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AuthstateSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: false,
});
setupListeners(store.dispatch);

const persistor = persistStore(store);

export { store, persistor };
