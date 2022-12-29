import { configureStore } from "@reduxjs/toolkit";
import { PhotoReducer } from "../PhotoReducer/PhotoReducer";
export const store = configureStore({
    reducer: {
        photo: PhotoReducer.reducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: ['your/action/type'],
    }),
});