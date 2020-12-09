import React from 'react';
import Header from '../Header/Header';
import '../Content/Content.css';
import { CSSTransitionGroup } from 'react-transition-group';

function Home() {

  return (
    <CSSTransitionGroup
    transitionName="worksTransition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}> 
    <div>
         <Header />     
      <div className="content">      
    </div>
    </div>
    </CSSTransitionGroup>
  
  );
}

export default Home;
