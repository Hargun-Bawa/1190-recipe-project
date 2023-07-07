import React from 'react';

class SignInPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSignIn = () => {
      
  };

  render() {
    return (
      <div className="popup">
        <div className="popup-inner">
          <h3>Sign In</h3>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
       
        
          <button onClick={this.handleSignIn}>Sign In</button>
        </div>
      </div>
    );
  }
}

export default SignInPopup;