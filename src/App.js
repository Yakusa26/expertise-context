import React, { Component } from "react";
import "./App.css";

const AuthContext = React.createContext({ isLoggedIn: false });

const Header = () => {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <div className="navbar bg-light">
          <div>Mon Header</div>
          {context.auth.isLoggedIn ? (
            <button className="btn-danger" onClick={context.logOut}>
              Déconnexion
            </button>
          ) : (
            <button className="btn-success" onClick={context.logIn}>
              Connexion
            </button>
          )}
        </div>
      )}
    </AuthContext.Consumer>
  );
};

class Layout extends Component {
  render() {
    return <Header />;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: { isLoggedIn: true },
      logIn: this.logIn,
      logOut: this.logOut,
    };
  }
  logIn = () => {
    this.setState({ auth: { isLoggedIn: true } });
  };
  logOut = () => {
    this.setState({ auth: { isLoggedIn: false } });
  };

  render() {
    return (
      <div className="App container-fluid d-flex flex-column">
        <AuthContext.Provider value={this.state}>
          <Layout />
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
