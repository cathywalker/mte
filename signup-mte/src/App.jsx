import React from "react";
import "./App.scss";
import { Login, Signup } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
      isSignupOpen: true
    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isSignupOpen: false });
  }

  showSignupBox() {
    this.setState({ isLoginOpen: false, isSignupOpen: true });
  }

  render() {
    return (
      <div className="App">
        <div className="login">
          <div className="content" ref={ref => (this.container = ref)}>
            <div className="nav">
              <input
                type="button"
                name="signup-button"
                value="Sign Up"
                onClick={this.showSignupBox.bind(this)}
                className={
                  this.state.isSignupOpen ? "btn-selected" : "btn-unselected"
                }
              />
              <input
                type="button"
                name="login-button"
                value="Login"
                onClick={this.showLoginBox.bind(this)}
                className={
                  this.state.isLoginOpen ? "btn-selected" : "btn-unselected"
                }
              />
            </div>

            {this.state.isLoginOpen && <Login />}
            {this.state.isSignupOpen && <Signup />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
