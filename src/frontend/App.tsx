import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Welcome to My React App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;
