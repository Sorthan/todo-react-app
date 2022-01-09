import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todos" component={Todo} />
      </Switch> 
    </Router>
  );
}

export default App