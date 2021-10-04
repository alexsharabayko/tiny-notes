import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Main } from './screens/main/Main';
import './styles/global/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const App = (): ReactElement => {
  return (
    <Router>
      <Main/>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
