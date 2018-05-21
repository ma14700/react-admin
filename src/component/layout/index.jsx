import React from 'react';

import NavTop from '../nav-top';
import NavSide from '../nav-side';

import './index.scss';
import './theme.css';

class Layout extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return(
      <div id="wrapper">
        <NavTop/>
        <NavSide/>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;