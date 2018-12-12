import { combineReducers } from 'redux';
import WorkFlowsReducer from './WFReducer';
import WorkFlowDataReducer from './WFData';
const rootReducer = combineReducers({
  workflows: WorkFlowsReducer,
  workflowData: WorkFlowDataReducer
});

export default rootReducer;
