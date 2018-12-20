import { combineReducers } from 'redux'
import dashboard from './getApiReducer'
import dropdown from './dropdownReducer'

export default combineReducers({
   dashboard,
   dropdown
})
