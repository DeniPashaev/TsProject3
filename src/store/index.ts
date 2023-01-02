import { githubApi } from './gitHub/gitHub.api';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore( {
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)

//delete - getDefaultMiddleware, outdated method