import React        from 'react';

class ListSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchType:'productId',
            searchKeyword:''
        }
    }
    //数据变化时
    onValueChange(e){

    }
    // 点击搜索按钮
    onSearch(){

    }
    //输入关键字回车，自动提交
    onSearchKeywordKeyUp(e){

    }
    render(){
        return(
            <div>123</div>
        )
    }
}

export default ListSearch;