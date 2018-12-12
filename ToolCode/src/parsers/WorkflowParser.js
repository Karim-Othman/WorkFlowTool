import _ from 'lodash';


export function GetAllWorkFlowsParserFunction (AllWorkFlows){

    // Address the data under root.row then make WF_ID is the key
    let workflows = AllWorkFlows.payload.data.root.row;
    let workflowList=[];
    workflows.forEach((workflow)=>{

        const {WF_ID, WF_DESC} = workflow;
        
        workflowList.push({

            label:`ID:${WF_ID}    Desc:${WF_DESC}`,
            value: WF_ID

        });


    });

    return workflowList ;
    
}


export function TablesRender (ActionResponse){

    // Should loop on every object on WorkFlowData then check if the object is array of object or not
        // if array of object --> each element will considered a row
            // each name value pair (sub element) will be considered a column
        // else each name value pair (sub element) will be considered a column 

    let WorkFlowArray= ActionResponse.payload;

    let Header = '';
    let Data = '<tbody>\n';
    let Tables= '';
    WorkFlowArray.forEach(Obj=>{
         Header = '';
         Data = '<tbody>\n';
        const ObjectData = Obj.data.root.row;
        
        if (ObjectData.length >0){
            
            Header = CreateRow('HeaderRow', ObjectData[0]);
            
            ObjectData.map((element)=>{

              Data = Data + CreateRow('DataRow', element);
            });
            
            Data=Data+'</tbody>\n</table>';

        }

        else {

            Header = CreateRow('HeaderRow', ObjectData);
            Data = Data + CreateRow('DataRow', ObjectData);
            Data=Data+'</tbody>\n</table>';
        }

        const Table= Header + Data;
        Tables=Tables+Table;

    });

    console.log(Tables);
    return Tables ;

}


function CreateRow (Operation,RowData){

    let Row='';
    if (Operation=='HeaderRow'){

        Row=Row+'<table className="table thead-dark table-hover">\n<thead>\n<tr>\n';
        for (var key in RowData )
        {
            if (RowData.hasOwnProperty(key)) {

                Row=Row+`<th>${key}</th>\n`;
                
            }
        }

        Row=Row+'</tr>\n</thead>\n';
        
    }

    else {

        Row=Row+'<tr>\n';
        for (var key in RowData )
        {
            if (RowData.hasOwnProperty(key)) {

                Row=Row+`<td>${RowData[key]}</td>\n`;

            }
        }
        Row=Row+'</tr>\n';

    }

    return Row;    
}
