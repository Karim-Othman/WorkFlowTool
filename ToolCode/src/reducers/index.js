import { combineReducers } from 'redux';
import WorkFlowsReducer from './WFReducer';
const rootReducer = combineReducers({
  workflows: WorkFlowsReducer
});

export default rootReducer;
