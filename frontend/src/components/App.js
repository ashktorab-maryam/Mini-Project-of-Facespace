import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { UserProvider } from "./UserContext";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import SignInPage from "./SignInPage";
// import GreetingPage from "./GreetingPage";
import Header from "./Header";



const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
      <UserProvider>
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/profile/:profileId"><ProfilePage/></Route>
          <Route exact path="/signin"><SignInPage/></Route>
          {/* <Route path="/greeting"><GreetingPage/></Route> */}
        </Switch>
      </UserProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
