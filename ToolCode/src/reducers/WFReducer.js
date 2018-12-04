import {Fetch_WorkFlows} from '../actions/index';
import {GetAllWorkFlowsParserFunction} from '../parsers/WorkflowParser'


export default function WorkFlowsReducer (state={}, action)
{

    switch (action.type)
    {
        case Fetch_WorkFlows:
            
           const workflows = GetAllWorkFlowsParserFunction(action);
            return workflows ; 


        default:
            return state ;
    }   

  


}