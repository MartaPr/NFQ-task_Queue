import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import API from '../Utils/API';
import Admin from '../pages/Admin';
import Lightboard from '../pages/Lightboard';
import Specialist from '../pages/Specialist';

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

  // handleDelete = e => {
  //   const customerList = [...this.state.customerList];
  //   const index = customerList.indexOf(e.target.value);
  //   console.log(index);
  //   if (index !== -1) {
  //     customerList.splice(index, 1);
  //     this.setState({
  //       customerList
  //     });
  //   }
  // };

  filterCustomers = e => {
    let clicked = e.currentTarget.value;
    let filteredList = this.state.customerList.filter(item => {
      return item.specName === clicked;
    });
    this.setState({
      filteredList,
      selectedOption: clicked
    });
    console.log(filteredList);
  };

  showResults = () => {
    const filteredList = [...this.state.filteredList];
    const listItmes = filteredList.map((item, i) => (
      <div key={i} className="customer">
        <div className="name-wrapper">
          <div>{i + 1}</div>
          <div className="customer customer--name">
            <span>{item.custFirstName}</span>
            <span>{item.custLastName}</span>
          </div>
        </div>
      </div>
    ));
    return listItmes;
  };

  handleDelete = () => {
    const filteredList = [...this.state.filteredList];
    filteredList.shift();
    this.setState({
      filteredList
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
