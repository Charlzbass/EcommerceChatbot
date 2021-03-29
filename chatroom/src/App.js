import Header from  './Header'
import Chatroom from  './Chatroom';
import './App.css';

function App() {
  return (
    <div className="App">
          <Header/>
          <div className="App-header"> 
              <Chatroom/>
          </div>
    </div>
  );
}

export default App;
