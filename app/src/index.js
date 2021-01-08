import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

// Components
import NavHam from './components/NavHam';
import App from './App';
import About from './About';
import TimeWarp from "./detail-pages/TimeWarp";
import Picnic from "./detail-pages/Picnic";
import BudgetBuddy from "./detail-pages/BudgetBuddy";
import BreakingTheIce from "./detail-pages/BreakingTheIce";
import Footer from './components/Footer';
import FourOhFour from './FourOhFour'; // 404 pages

// CSS
import './css/index.css';
import './css/Main.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <HashRouter basename='/'>

        <NavHam />

        <Switch>
          <Route exactly path="/about">
            <About />
          </Route>

          <Route exactly path="/picnic">
            <Picnic />
          </Route>

          <Route exactly path="/time-warp">
            <TimeWarp />
          </Route>

          <Route exactly path="/budget-buddy">
            <BudgetBuddy />
          </Route>

          <Route exactly path="/breaking-the-ice">
            <BreakingTheIce />
          </Route>

          <Route path="/404">
            <FourOhFour />
          </Route>

          <Route exactly path="/">
            <App />
          </Route>

        </Switch>
      </HashRouter>

      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);