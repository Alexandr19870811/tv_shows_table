import {createStore, applyMiddleware, Middleware} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from '../reduxStore'
import { composeWithDevTools } from 'redux-devtools-extension';

const composedMiddleWares = composeWithDevTools(applyMiddleware(thunk))

export const globalStore = createStore(rootReducer, composedMiddleWares)
