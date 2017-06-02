import React from 'react';
import ReactDOM from 'react-dom';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div className="dropdown">
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/logout">Log out</a></li>
          </ul>
        </div>
      );
    }
    return null;
  }
}

export default DropdownMenu;