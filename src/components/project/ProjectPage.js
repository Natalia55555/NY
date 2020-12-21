import Header2 from '../Header2/Header2';
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../Content/Content.css';
import InformBlock from '../InformBlock/InformBlock';

function ProjectPage() {


  return (
    
    <CSSTransitionGroup
    transitionName="worksTransition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}> 
  <div>
  <Header2 /> 
    <div className="contentproject"> 
      <InformBlock/>  
    </div> 
       
  </div>
  </CSSTransitionGroup>
  );
}

export default ProjectPage;

