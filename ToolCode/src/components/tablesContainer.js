import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";


class TablesView extends Component{


    constructor(props) {
        super(props);
        
        this.state={workflowData:{TablesColumns:[],
            TablesData:[],
            TableNames:[]
        }

    };
       
        
      }


      renderTables(Headers,Data, Names){


        return Headers.map( (Header, index) => {

            return (
                <div>
                    <h className="TableHeader">{Names[index]}</h>
                    <ReactTable
                    data={Data[index]}
                    columns={Header}
                    minRows={1}
                    showPagination={false}
                    className="-striped -highlight tableBackground"
                    />
                    <br/>
                    <br/>
                </div>);
        });
      }

      render(){
    
        try {
            const Header=this.props.workflowData.TablesColumns;
            const Data=this.props.workflowData.TablesData;
            const Names=this.props.workflowData.Tables;
            console.log(Names);
        if (Header.length == Data.length && Header.length == Names.length){
            return(
    
                <div>
                    {this.renderTables(Header, Data, Names)}
                </div>
                
            );
        }
    }
    catch(e){
            return(
    
                <div>
                    
                </div>
            );}
    
    }
    
    }
    
    function mapStateToProps({workflowData})
    {
        return {workflowData};
    }
    
    export default connect (mapStateToProps, null) (TablesView);