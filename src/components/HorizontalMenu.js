import React from 'react';

class HorizontalMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTagMenuOpen: false,
      isCultureMenuOpen: false,
    };
  }

  toggleTagMenu = () => {
    this.setState((prevState) => ({
      isTagMenuOpen: !prevState.isTagMenuOpen,
    }));
  };

  toggleCultureMenu = () => {
    this.setState((prevState) => ({
      isCultureMenuOpen: !prevState.isCultureMenuOpen,
    }));
  };

  render() {
    const { isTagMenuOpen, isCultureMenuOpen } = this.state;

    const dropdownStyle = {
      position: 'absolute',
      top: '100%',
      left: 0,
      backgroundColor: '#263A29',
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: '1',
      color: 'white',
      display: 'none',
    };

    const tagDropdownStyle = isTagMenuOpen ? { ...dropdownStyle, display: 'block' } : dropdownStyle;
    const cultureDropdownStyle = isCultureMenuOpen ? { ...dropdownStyle, display: 'block' } : dropdownStyle;

    const dropdownContentStyle = {
      color: 'white', // Set the text color to white
      padding: '10px',
      textDecoration: 'none',
    };

    return (
      <div style={{ backgroundColor: '#263A29', color: 'white', display: 'flex' }}>
        <div
          className="menu-item dropdown"
          style={{ flex: '1', padding: '20px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}
          onClick={this.toggleTagMenu}
        >
          <span>Tags</span>
          <div className="dropdown-content" style={tagDropdownStyle}>
            <a href="#" style={dropdownContentStyle}>Tag 1</a>
            <a href="#" style={dropdownContentStyle}>Tag 2</a>
            <a href="#" style={dropdownContentStyle}>Tag 3</a>
          </div>
        </div>
        <div
          className="menu-item dropdown"
          style={{ flex: '1', padding: '20px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}
          onClick={this.toggleCultureMenu}
        >
          <span>Cultures</span>
          <div className="dropdown-content" style={cultureDropdownStyle}>
            <a href="#" style={dropdownContentStyle}>Italian</a>
            <a href="#" style={dropdownContentStyle}>Mexican</a>
            <a href="#" style={dropdownContentStyle}>Indian</a>
            <a href="#" style={dropdownContentStyle}>Japanese</a>
          </div>
        </div>
        <div className="menu-item" style={{ flex: '1', padding: '20px' , textAlign: 'center'}}>

          <a href="https://www.google.ca" target="_blank" style={{ color: 'white' }}>
            Favorites
          </a>
        </div>
      </div>
    );
  }
}

export default HorizontalMenu;
