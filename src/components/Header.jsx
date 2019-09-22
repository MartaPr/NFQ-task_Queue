import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import API from '../Utils/API';
import Admin from '../pages/Admin';
import Lightboard from '../pages/Lightboard';
import Specialist from '../pages/Specialist';
import Button from './Button';

class Header extends Component {
  state = {
    customerList: [],
    filteredList: [],
    selectedOption: ''
  };

  async componentDidMount() {
    let customerList = await API.get('/', {
      params: {
        results: 1
      }
    });

    this.setState({
      customerList: customerList.data
    });
  }

  saveToStorage = () => {
    const { customerList } = this.state;
    localStorage.setItem('load-data', JSON.stringify(customerList));
  };

  filterCustomers = e => {
    let clicked = e.currentTarget.value;
    let filteredList = this.state.customerList.filter(item => {
      return item.specName === clicked;
    });
    this.setState({
      filteredList,
      selectedOption: clicked
    });
  };

  showResults = () => {
    const filteredList = [...this.state.filteredList];
    const listItmes = filteredList.map((item, i) => (
      <div key={item._id} className="customer">
        <div className="name-wrapper">
          <div>{i + 1}</div>
          <div className="customer customer--name">
            <span>{item.custFirstName}</span>
            <span>{item.custLastName}</span>
          </div>
        </div>
        <Button
          className="btn btn-danger"
          text="Delete"
          onClick={this.handleDelete}
        />
      </div>
    ));
    return listItmes;
  };

  handleDelete = id => {
    // const customerList = [...this.state.customerList];
    // customerList.shift();
    // this.setState({
    //   customerList
    // });
    const customerList = [...this.state.customerList];
    customerList.filter(item => item._id !== id);
    this.setState({
      customerList
    });
  };

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
          <Route
            exact
            path="/"
            component={() => <Admin saveData={this.saveToStorage} />}
          />
          <Route
            exact
            path="/lightboard"
            component={() => (
              <Lightboard customerList={this.state.customerList} />
            )}
          />
          <Route
            exact
            path="/specialist"
            component={() => (
              <Specialist
                filtered={this.filterCustomers}
                selectedOption={this.state.selectedOption}
                results={this.showResults()}
                deleteItem={this.handleDelete}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Header;
