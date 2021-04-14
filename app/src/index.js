import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import SimpleReactLightbox from 'simple-react-lightbox';

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
            <SimpleReactLightbox>
              <Picnic />
            </SimpleReactLightbox>
            <Footer />
          </Route>

          <Route exactly path="/time-warp">
            <SimpleReactLightbox>
              <TimeWarp />
            </SimpleReactLightbox>
            <Footer />
          </Route>

          <Route exactly path="/budget-buddy">
            <SimpleReactLightbox>
              <BudgetBuddy />
            </SimpleReactLightbox>
            <Footer />
          </Route>

          <Route exactly path="/breaking-the-ice">
            <SimpleReactLightbox>
              <BreakingTheIce />
            </SimpleReactLightbox>
            <Footer />
          </Route>

          <Route path="/404">
            <FourOhFour />
            <Footer />
          </Route>

          <Route exactly path="/">
            <App />
            <Footer />
          </Route>

        </Switch>
      </HashRouter>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);