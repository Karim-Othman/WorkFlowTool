import React, { Component } from 'react';
import {connect} from 'react-redux';
import renderHTML from 'react-render-html';


class TablesView extends Component{


    constructor(props) {
        super(props);
        
        this.state={workflowData:''

    };
       
        
      }

    




render(){


    
    if (this.props.workflowData.length>0){

        console.log(this.props.workflowData);
        return(

            <div className="table-responsive">
                {renderHTML(this.props.workflowData)}
            </div>
        );
    }

    else{

        return(

            <div>
                
            </div>
        );
    }

}

}

function mapStateToProps({workflowData})
{
    return {workflowData};
}

export default connect (mapStateToProps, null) (TablesView);