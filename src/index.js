import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, Switch, Redirect} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Layout from './component/layout'

import Home from './page/home/index'
import Login from './page/login/index';
import UserList from './page/user/index'
import ErrorPage from './page/error/index';

import ProductRouter from './page/product/router';


class App extends React.Component{
    render(){
        // return(
        //     <Router>
        //         <Switch>
        //             <Route path="/login" component={Login} />
        //             <Route path="/" render={props=>(
        //                 <Layout>
        //                     <Switch>
        //                         <Route exact path="/" component={Home} />
        //                         <Redirect from="*" to='/' />
        //                     </Switch>
        //                 </Layout>
        //             )} />
                  
        //         </Switch>
        //     </Router>
        // );
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={ProductRouter}/>
                    <Route path="/user" component={UserList}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>  
        );
        return(
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}
ReactDOM.render(
   <App/>
    , document.getElementById('root'));
registerServiceWorker();
