import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import UsersReducer from './Users/Reducers';
import GroupsReducer from './Groups/Reducers';
import TipologiasReducer from './Tipologias/Reducers';

const rootReducer = combineReducers({
    utilizadores: UsersReducer,
    grupos: GroupsReducer,
    tipologias: TipologiasReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);