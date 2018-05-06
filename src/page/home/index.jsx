import React from 'react';
import {Link} from 'react-router-dom';

import PageTitle from '../../component/page-title'; 
import './index.scss'

class Home extends React.Component{
  render(){
    return(
      <div id="page-wrapper">
          <PageTitle title="首页"/>
      </div>
    )
  }
}

export default Home;