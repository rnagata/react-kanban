import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e){
    const {value} = e.target;
    this.setState({username : value});
  }

  handlePasswordChange(e){
    const {value} = e.target;
    this.setState({password : value});
  }

  handleSubmit(e){
    e.preventDefault();
    const {username, password} = this.state;
    this.props.login({username, password})
    .then((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    });
  }

  render(){ return (
    <div className="login">
      <form className="login-fields">
        <label>Username: </label>
        <input type="text" placeholder="Username" onChange={this.handleUsernameChange}/>
        
        <label className="password-label">Password: </label>
        <input type="text" placeholder="Password" onChange={this.handlePasswordChange}/>
        
        <button className="login-submit" type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    </div>
  )}
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      console.log('credentials ', credentials);
      const loginAction = login(credentials);
      dispatch(loginAction);
    }
  }
}

Login = connect(
  null,
  mapDispatchToProps
)(Login);

export default Login;