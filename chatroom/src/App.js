import { Router, Route, Switch} from 'react-router-dom';
import Header from  './Header'
import Landing from './Landing';
import Chatroom from  './Chatroom';
import history from './history';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router history={history}>
          <Header/>
          <div className="App-header"> 
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/chatroom" component={Chatroom}/>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
