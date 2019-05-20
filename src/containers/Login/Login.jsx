import React, {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e){
    const {value} = e.target;
    this.setState({username : value}, () => {
      console.log(this.state.username);
    });
  }

  handlePasswordChange(e){
    const {value} = e.target;
    this.setState({password : value}, () => {
      console.log(this.state.password);
    })
  }

  render(){ return (
    <div className="login">
      <form className="login-fields">
        <label>Username: </label>
        <input type="text" placeholder="Username" onChange={this.handleUsernameChange}/>
        <label className="password-label">Password: </label>
        <input type="text" placeholder="Username" onChange={this.handlePasswordChange}/>
      </form>
    </div>
  )}
}

export default Login;