import React from 'react';
import SignInPopup from './SignInPopup';
import './download.png'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignInOpen: false,
      user: null,
      isNewUser: true,
    };
  }

  toggleSignInPopup = () => {
    this.setState((prevState) => ({
      isSignInOpen: !prevState.isSignInOpen,
    }));
  };

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

  handleSignOut = () => {
    this.setState({ user: null, isNewUser: true });
  };

  render() {
    const { isSignInOpen, user, isNewUser } = this.state;

    return (
      <div>
        <div>
        <div
          style={{
            overflowAnchor:'auto',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#263A29',
            color: 'white',
          }}
        >
          <div className='barrier' style={{backgroundColor:'#f2e3db', width:'1px' }} ></div>
          <div style = {{flex: '5 1 auto ',  display: 'block', float:'left', paddingLeft:' 15px'}}>

            {!user ? (
              <button
                style={{
                  float: 'left',
                  flex: '1 1 auto',
                  backgroundColor: '#E86A33',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px' ,
                  cursor: 'pointer',
                  alignContent: 'left',
                  margin: '2px'
                }}
                onClick={this.toggleSignInPopup}
              >
                Sign In
              </button>
            ) : (
              <div
                style={{
                  backgroundColor: '#E86A33',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderTopRightRadius: '20px',
                  borderBottomRightRadius: '20px',
                  cursor: 'pointer',
                  margin: '2px'
                }}
              >
                {user.name}, Sign Out
              </div>
            )}
          </div>
          <div style= {{ flex: '6 1 auto' ,  display:'blocl'  }}>
            <a href = "./App.jss">
              <div style= {{float: 'left'}}>
            <img src= {require ('./download.png')}  height = '75px' style = {{margin: '0 '}} />
                </div>
            </a>
          </div>
        </div>

        {/* Render the SignInPopup component if the sign-in popup is open */}
        {isSignInOpen && <SignInPopup onSignIn={this.handleSignIn} />}

        {/* Render user welcome message */}
        {user && (
          <div style={{ padding: '20px', backgroundColor: '#E86A33', color: 'white' }}>
            Welcome{isNewUser ? '' : ' back'}, {user.name}!
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default Header;
