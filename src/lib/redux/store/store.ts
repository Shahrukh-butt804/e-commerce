import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import { apiSlice } from "../api/jsonApi"; // Import RTK Query API slice
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { productApiSlice } from "../api/productApi";
import cartReducer from "../slices/cartState";
import { cartApiSlice } from "../api/cartApi";

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"], // Persist only specific reducers (not api)
};

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  cart : cartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer, // Add RTK Query API reducer
  [productApiSlice.reducerPath]: productApiSlice.reducer,
  [cartApiSlice.reducerPath]: cartApiSlice.reducer,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }).concat(apiSlice.middleware,productApiSlice.middleware,cartApiSlice.middleware) // Add RTK Query Middleware
});

// Persistor for PersistGate
export const persistor = persistStore(store);

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
