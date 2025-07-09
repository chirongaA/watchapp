import { configureStore } from "@reduxjs/toolkit"
import counterSclice from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterSclice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch