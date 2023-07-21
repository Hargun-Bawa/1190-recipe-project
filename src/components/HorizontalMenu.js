import React from 'react';



/// Horizontal menu acts as a naviagion bar, and a filter
/// for the rest of the webapp, currently only naviagion
/// works
class HorizontalMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTagMenuOpen: false,
      isCultureMenuOpen: false,
    };
  }

  /// functions for toggling the menu's to open and close
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


  /// function to navigate to the favourites page.
  favPage = () => {
    this.props.setCurrentPage('favourites');

  }
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
      color: 'yellow',
      display: 'none',
    };


    const tagDropdownStyle = isTagMenuOpen ? { ...dropdownStyle, display: 'block' } : dropdownStyle;
    const cultureDropdownStyle = isCultureMenuOpen ? { ...dropdownStyle, display: 'block' } : dropdownStyle;

    const dropdownContentStyle = {
      color: 'white', // Set the text color to white
      textDecoration: 'none',
    };

    return (
      <div style={{ backgroundColor: '#263A29', color: '', display: 'flex', border: "1px solid #f2e3db" }}>
        <div
          className="menu-item dropdown"
          style={{ flex: '1', padding: '20px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}
          onClick={this.toggleTagMenu}
        >
          <span>Tags</span>
          <div className="dropdown-content" style={tagDropdownStyle}>
            <div style={dropdownContentStyle}>Tag 1</div>
            <div style={dropdownContentStyle}>Tag 2</div>
            <div style={dropdownContentStyle}>Tag 3</div>
          </div>
        </div>

        <div style={{ backgroundColor: "#f2e3db", width: '1px' }}>  </div>
        <div
          className="menu-item dropdown"
          style={{ flex: '1', padding: '20px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}
          onClick={this.toggleCultureMenu}
        >
          <span>Cultures</span>
          <div className="dropdown-content" style={cultureDropdownStyle}>
            <div style={dropdownContentStyle}>Italian</div>
            <div style={dropdownContentStyle}>Mexican</div>
            <div style={dropdownContentStyle}>Indian</div>
            <div style={dropdownContentStyle}>Japanese</div>
          </div>
        </div>
        <div style={{ backgroundColor: "#f2e3db", width: '1px' }}>  </div>
        <div className="menu-item" style={{ flex: '1', padding: '20px', textAlign: 'center' }}>
          <div onClick={this.favPage} style={{ color: 'white' }}>
            Favorites
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalMenu;
