import React from 'react';
import { Switch, Route } from 'react-router-dom' ;
import ProjectPage from '../project/ProjectPage';
import Home from '../Home/Home';

function Content() {
  return (         
    
    <Switch>       
     <Route exact path="/" component={Home}/>
     <Route path="/card" component={ProjectPage}/>
   </Switch>
   
  );
}

export default Content;