import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/search' render={(() => <SearchPage />)}/>
          <Route path='/' exact render={() => <Home />} />
      </Router>
    </div>
  );
}

export default App;
