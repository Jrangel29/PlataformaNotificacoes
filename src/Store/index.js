import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import UsersReducer from './Users/Reducers';
import GroupsReducer from './Groups/Reducers';
import TipologiasReducer from './Tipologias/Reducers';
import DistritosReducer from './Distritos/Reducers';
import ConcelhosReducer from './Concelhos/Reducers';
import CasasReducer from './Casas/Reducers';
import EventosReducer from './Eventos/Reducers';
import NotificationsReducer from './Notifications/Reducers'

const rootReducer = combineReducers({
    utilizadores: UsersReducer,
    grupos: GroupsReducer,
    tipologias: TipologiasReducer,
    distritos: DistritosReducer,
    concelhos: ConcelhosReducer,
    casas: CasasReducer,
    eventos: EventosReducer,
    notificacoes: NotificationsReducer
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