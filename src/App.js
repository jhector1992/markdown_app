import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import './sass/custom.scss';
import Home from './views/home';
import Navigation from './components/navigation';
import MarkdownList from './views/markdownList';
import MarkdownDetails from './views/markdownDetails';
import MarkdownCreate from './views/markdownCreate';


class App extends Component {
  render (){
    return (
      <Router>
        <Navigation />
        <div className="container">
          <br />
          <Switch>
            <Route path="/markdown/create" component={ MarkdownCreate }>
            </Route>
            <Route path="/markdown/:id" component={ MarkdownDetails }>
            </Route>
            <Route path="/markdown">
              <MarkdownList />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ div>
      </Router>
    );
  }
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}


export default App;