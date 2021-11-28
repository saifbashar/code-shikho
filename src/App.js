// Import Section
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      {/* React router */}
      <Router>
        {/* Header */}
        <Header></Header>
        <Switch>
          {/* Route Section */}
          <Route exact path="/">
            {/* Homepage */}
            <Home></Home>
          </Route>
          <Route path="/blogs">
            {/* Blogs */}
            <Blogs></Blogs>
          </Route>
          <Route path="/course">
            {/* Course */}
            <Courses></Courses>
          </Route>
          <Route path="/about">
            {/* about */}
            <About></About>
          </Route>
          <Route path="*">
            {/* not found */}
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* Footer Section */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
