import _ from 'lodash';


export function GetAllWorkFlowsParserFunction (AllWorkFlows){

    // Address the data under root.row then make WF_ID is the key
    let workflows = AllWorkFlows.payload.data.root.row;
    let workflowList=[];
    workflows.forEach((workflow)=>{

        const {WF_ID, WF_DESC} = workflow;
        
        workflowList.push({

            label:`ID:${WF_ID}/ Desc:${WF_DESC}`,
            value: WF_ID

        });


    });

    return workflowList ;
    
}