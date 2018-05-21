import React from 'react';
import MUtil from '../../../util/mm';
import Product from '../../../service/product-service';

import PageTitle from '../../../component/page-title/index.jsx';

import './save.scss';

class ProductSave extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id                  : this.props.match.params.pid,
            name                : '',
            subtitle            : '',
            categoryId          : 0,
            parentCategoryId    : 0,
            subImages           : [],
            price               : '',
            stock               : '',
            detail              : '',
            status              : 1 //商品状态1为在售
        }
    }
    componentDidMount(){
        this.loadProduct();
    }
    loadProduct(){
        
    }
}