import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, Switch, Redirect} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Layout from './component/layout'

import Home from './page/home/index'
class App extends React.Component{
    render(){
        return(
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect from="*" to='/' />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}
ReactDOM.render(
   <App/>
    , document.getElementById('root'));
registerServiceWorker();
