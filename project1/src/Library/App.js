import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './Home/Home';
// import About from './About/About';
import Header from './Header/Header';

const Home = lazy(() => import('./Home/Home.js'));
const About = lazy(() => import('./About/About'));

const AsyncHome = () => (
  <Suspense fallback={<div>Load...</div>}>
    <Home />
  </Suspense>
);

const AsyncAbout = () => (
  <Suspense fallback={<div>Load...</div>}>
    <About />
  </Suspense>
);

const App = () => (
  <Router>
    <Header />
    <Route exact path="/" component={AsyncHome} />
    <Route exact path="/about" component={AsyncAbout} />
    <Route
      path="/about/:id"
      render={props => (
        <div>
          {props.match.params.id}
          <button type="button" onClick={() => props.history.push('/')}>
            home
          </button>
          <button type="button" onClick={() => props.history.goBack('/')}>
            back
          </button>
        </div>
      )}
    />
  </Router>
);

export default App;
