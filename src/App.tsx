import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import { GistContextProvider } from "./context/AppContext";
import { CreateGist } from "./pages/creategist/CreateGist";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";

function App() {
  return (
    <>
      <GistContextProvider>
        <Switch>
          <Route path="/create-gist" component={CreateGist} />
          <Route path="/profile" exact component={Profile} />
          {/* <Route path="/gist/:gistId" exact component={DetailPage} /> */}
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </GistContextProvider>
    </>
  );
}

export default App;
