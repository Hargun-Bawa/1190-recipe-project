import React from 'react';
import "./Header.css";
import SignInPopup from './SignInPopup';
import './download.png'


/// The header object is rendered for all 3 webpages, contains the sign in functions and the logo navigation to homepage
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignInOpen: false,
      user: null,
      isNewUser: true,
    };
  }

  /// clickable sign in button, no functionality other than popup
  toggleSignInPopup = () => {
    this.setState((prevState) => ({
      isSignInOpen: !prevState.isSignInOpen,
    }));
  };
/// doesn't work right now, the idea is to save favourites based on users.
  handleSignIn = (name) => {
    const user = this.props;

    if (user && user.name === name) {
      console.log(`Welcome back, ${name}!`);
      this.setState({ isNewUser: false });
    } else {
      const newUser = { name };
      this.setState({ user: newUser, isNewUser: true });
      console.log(`Welcome, ${name}! New user created.`);
    }
  };
/// see above
  handleSignOut = () => {
    this.setState({ user: null, isNewUser: true });
  };

  render() {
    const { isSignInOpen, user, isNewUser } = this.state;
    return (
      <div>
        <div>
        <div className='frame'>
          <div className='barrier' ></div>
          <div className='sign_in'>
            {!user ? (
              <button className = "b1" onClick={this.toggleSignInPopup}>
                Sign In
              </button>
            ) : (
              <div className='test'>
                {user.name}, Sign Out
              </div>
            )}
          </div>
          <div className = "logobox">
            <a href = "./App.jss">
              <div >
            <img className = "logo" src= {require ('./download.png')} alt='logo' />
                </div>
            </a>
          </div>
        </div>
        {isSignInOpen && <SignInPopup onSignIn={this.handleSignIn} />}
        </div>
      </div>
    );
  }
}

export default Header;
