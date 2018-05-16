import React from 'react';

class TableList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isFirstLoading:true
        }
    }
    componentWillReceiveProps(){
        this.setState({
            isFirstLoading:false
        });
    }
    render(){
        let tableHeader = this.props.tableHeader.map(
            (tableHead,index)=>{
                if(typeof tableHead === 'object'){
                    return <th key={index} width={tableHead.width}>{tableHead.name}</th>
                }else if(typeof tableHead === 'string'){
                    return <th key={index}>{tableHead}</th>
                }
            }
        );
        let listBody = this.props.children;
        let listInfo = (
            <tr>
                <td colSpan={this.props.tableHeads.length} className="text-center">
                    {this.state.isFirstLoading ? '正在加载数据...' : '没有找到相应的结果~'}</td>
            </tr>
        )
        return(
            <div></div>
        )
    }
}