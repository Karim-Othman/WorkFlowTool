import {Fetch_WFRelativeData} from '../actions/index';
import {TablesRender} from '../parsers/WorkflowParser';


export default function WorkFlowDataReducer (state={}, action)
{

    switch (action.type)
    {
        case Fetch_WFRelativeData:

            const TablesData = TablesRender(action);
            return TablesData;

        default:
            return state ;
    }   

  


}