import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create/" component={CreateBlog} />
            <Route path="/blogs/:id" component={BlogDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
