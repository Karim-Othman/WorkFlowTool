import axios from 'axios';


export const Fetch_WorkFlows = 'Fetch_WorkFlows';

const RootUrl='http://10.230.86.35:3235/DBExtractor/?q=';

export function GetWorkFlowIDs(){

    const Query='"Select * from WORKFLOW"'
    const Request= axios.get(`${RootUrl}${Query}`);


    return {
        type: Fetch_WorkFlows,
        payload: Request
    }
}