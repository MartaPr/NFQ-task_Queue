import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Admin from '../pages/Admin';
import Lightboard from '../pages/Lightboard';
import Specialist from '../pages/Specialist';

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className="header">
          <div className="container">
            <div className="header__links">
              <Link className="header__links-item" to="/">
                Admin
              </Link>
              <Link className="header__links-item" to="/lightboard">
                Lightboard
              </Link>
              <Link className="header__links-item" to="/specialist">
                Specialist
              </Link>
            </div>
          </div>
        </header>
        <div className="routes">
          <Route exact path="/" component={Admin} />
          <Route exact path="/lightboard" component={Lightboard} />
          <Route exact path="/specialist" component={Specialist} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Header;
