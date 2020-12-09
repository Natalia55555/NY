import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */

import App from '../App/App';
import ProjectPage from '../project/ProjectPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
   
    <Route path="/some/where" component={App} />
    <Route path="/some/otherpage" component={ProjectPage} />
  </Route>
);

