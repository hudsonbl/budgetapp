import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import BudgetBar from './components/BudgetBar'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {

  return (
    <div className="contianer">
      <h1>Where is this 1</h1>
      <div className="container" style={{display: 'flex', float: 'right'}}>
        <div className="card">
          <div className="card-body">
            <BudgetBar />
          </div>
        </div>
      </div>
      <h1>Where is this 2</h1>
    </div>
    
  );
};


export default App;
