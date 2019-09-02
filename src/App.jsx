import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import Contact from './Components/Contact';
import InnerHeader from './Components/InnerHeader';
import Subscribe from './Components/Subscribe';
import Home from './Pages/Home';
import PostsList from './Pages/PostsList';
import PostsPage from './Pages/PostsPage';
import Error from './Pages/Error';


const App = ({ store }) =>(
 
    <Provider store={store} >
                <Router>
                    <Route path="/" render={ ( props ) => ( (props.location.pathname !== "/") && !(/\/([a-zA-Z]{2})([/]?)$/.test(props.location.pathname)) ?  
                                <InnerHeader {...props} /> 
                                    : "" )} />
                    <Switch>
                        <Route exact path="/:lang?" render={ props => <Home {...props} /> } />
                        <Route path="/:lang?/:type/:category?/view/:post" render = {props => <PostsPage  {...props} /> } />
                        <Route path="/:lang?/:type/:category?"  render = {props => <PostsList  {...props} /> } />
                        <Route component={Error} />
                    </Switch>    
                        <Subscribe />   
                        <Contact/>
                </Router>
            </Provider>
);
App.propTypes = {
    store: PropTypes.object.isRequired
}
  
export default App;