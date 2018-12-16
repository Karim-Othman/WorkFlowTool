import {Fetch_WFRelativeData} from '../actions/index';
import {TablesRender, WFDataParser} from '../parsers/WorkflowParser';


export default function WorkFlowDataReducer (state={}, action)
{

    switch (action.type)
    {
        case Fetch_WFRelativeData:

           // const TablesData = TablesRender(action);
           let TablesData = WFDataParser(action);
           const Tables=["WORKFLOW","WORKFLOW_STEPS","XSL_PARSERS"];
           TablesData.Tables=Tables;
            return TablesData;

        default:
            return state;
    }   

  


}