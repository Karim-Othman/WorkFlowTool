import axios from 'axios';


export const Fetch_WorkFlows = 'Fetch_WorkFlows';
export const Fetch_WFRelativeData = 'Fetch_WFRelativeData';


const RootUrl='http://10.230.86.35:3235/DBExtractor/?q=';


export function GetWorkFlowIDs(){

    const Query='"Select * from WORKFLOW"';
    const Request= axios.get(`${RootUrl}${Query}`);


    return {
        type: Fetch_WorkFlows,
        payload: Request
    }
}


export function GetWorkFlowData(WorkFlowID){

    const Query=[`"select * from WORKFLOW where WF_ID = '${WorkFlowID}'"`,

                 `"select * from WORKFLOW_STEPS where WF_ID = '${WorkFlowID}'"`,

                 `"select C.* from (select * from WORKFLOW_STEPS where WF_ID = '${WorkFlowID}') B join (select * from XSL_PARSERS) C on C.PARSER_NAME = B.PARSER_NAME"`
            ];


    const Request=axios.all([
        axios.get(`${RootUrl}${Query[0]}`),
        axios.get(`${RootUrl}${Query[1]}`),
        axios.get(`${RootUrl}${Query[2]}`)
        ]);


    return{
        type: Fetch_WFRelativeData,
        payload: Request
    };
}