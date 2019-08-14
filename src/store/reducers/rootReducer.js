import authReducer from './authReducer'
import agendaReducer from './agendaReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    agenda: agendaReducer
});

export default rootReducer