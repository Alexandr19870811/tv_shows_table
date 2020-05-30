import { tvShowReducer } from './tvShowsReducer/tvShowReducer'
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
  tvShows: tvShowReducer
});

export type RootState = ReturnType<typeof rootReducer>
