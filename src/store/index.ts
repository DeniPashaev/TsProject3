import { githubApi } from './gitHub/gitHub.api';
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore( {
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    }
})