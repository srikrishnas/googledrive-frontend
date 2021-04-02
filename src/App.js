import './App.css';
import React, { useContext, useState } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom"

import FilesView from './components/filesView/FilesView';
import Header from './components/header'
import Sidebar from './components/sidebar'
import Landing from './components/landing/Landing'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Main from './components/main/Main';

export const WrapperContext = React.createContext(
  {
    user: null,
    token: null,
    isLoggedIn: false,
    logout: () => { }
  }
)

const WrapperRoute = ({render,...restProps})=>{
  const {isLoggedIn,user,token}=useContext(WrapperContext);
  return(
      <Route
      {...restProps}
      render = {
          (props)=>{
              if(isLoggedIn){
                  if(!token){
                      return <Redirect to={`/login`}/>
                  }
              }else{
                  return render(props)
              }
          }
      }
      />
  )
}

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("auth_token")
  }

  const handleLogin = (name, token) => {
    setUser(name);
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem("auth_token", token);
  }


  return (
    <Router>
      <WrapperContext.Provider
        value={
          {
            user,
            token,
            isLoggedIn,
            logout,
          }
        }
      >
        <Switch>

        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register}/>
        

        <WrapperRoute
            path="/login"
            render={(props) => <Login {...props} handleLogin={handleLogin} />}
          />

          {
            user ? (
              <>
                <Route exact path="/mainpage" component={Main}/>
              </>
            ) : (
              <Route exact path="/" component={Landing} />
            )
            
          }

        </Switch>

      </WrapperContext.Provider>

    </Router>
  );
}

export default App;
