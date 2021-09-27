
import './App.css';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Books from './components/Books';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <Switch>
        <Route exact path="/">Home Page</Route>
        <Route exact path="/Book"><Books /></Route>
        <Route path="/Books/:id"><BookDetails/></Route>
        {/* <Route path="/Books">Book Page</Route> */}
      </Switch>
    </div>
  );
}

export default App;
