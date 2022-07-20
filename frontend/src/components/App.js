import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { UserProvider } from "./UserContext";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";



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
          <Route path="/profile/:profileId"><ProfilePage/></Route>
        </Switch>
      </UserProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
