import React, { Component } from 'react';
import Button from '../components/Button';

class Lightboard extends Component {
  state = {
    customerList: []
  };

  componentDidMount() {
    const customerList = JSON.parse(localStorage.getItem('load-data'));
    this.setState({
      customerList
    });
  }

  handleDelete = () => {
    console.log('clicked');
  };

  filterSpecOne = () =>
    this.state.customerList.map((item, i) => {
      if (item.specName === 'Janine') {
        return (
          <div key={i} className="customer">
            <div className="name-wrapper">
              <div>{i + 1}</div>
              <div className="customer customer--name">
                <span>{item.custFirstName}</span>
                <span>{item.custLastName}</span>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

  filterSpecTwo = () =>
    this.state.customerList.map((item, i) => {
      if (item.specName === 'Shirley') {
        return (
          <div key={i} className="customer">
            <div>{i + 1}</div>
            <div className="customer customer--name">
              <span>{item.custFirstName}</span>
              <span>{item.custLastName}</span>
              <Button
                className="btn btn-secondary"
                onClick={this.handleDelete}
                text="Delete"
              />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

  filterSpecThree = () =>
    this.state.customerList.map((item, i) => {
      if (item.specName === 'John') {
        return (
          <div key={i} className="customer">
            <div>{i + 1}</div>
            <div className="customer customer--name">
              <span>{item.custFirstName}</span>
              <span>{item.custLastName}</span>
              <Button
                className="btn btn-secondary"
                onClick={this.handleDelete}
                text="Delete"
              />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

  render() {
    return (
      <div className="container-md specialist">
        <div className="specialist specialist--left">
          <h2>Janine</h2>
          {this.filterSpecOne()}
        </div>
        <div className="specialist specialist--middle">
          <h2>Shirley</h2>
          {this.filterSpecTwo()}
        </div>
        <div className="specialist specialist--right">
          <h2>John</h2>
          {this.filterSpecThree()}
        </div>
      </div>
    );
  }
}

export default Lightboard;
