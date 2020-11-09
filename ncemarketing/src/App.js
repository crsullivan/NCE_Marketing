import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/History.js";
import Header from "./components/Header.jsx"
import Landing from "./components/Landing.jsx"
import Footer from "./components/Footer.jsx"
import './App.css';

function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
