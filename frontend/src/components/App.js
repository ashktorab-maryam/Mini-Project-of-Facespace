import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { UserProvider } from "./UserContext";
import HomePage from "./HomePage";



const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
      <UserProvider>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/page-1">Page 1</Route>
        </Switch>
      </UserProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
