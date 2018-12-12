import {Fetch_WorkFlows, Fetch_WFRelativeData} from '../actions/index';
import {GetAllWorkFlowsParserFunction, TablesRender} from '../parsers/WorkflowParser'


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