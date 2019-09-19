import React, { Component } from 'react';
import API from '../Utils/API';

class Admin extends Component {
  state = {
    customerList: []
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

  testFun = () => {
    console.log('Look at me');
  };
  render() {
    return (
      <div className="container-md button-container">
        {console.log(this.state.customerList)}
        <button
          className="btn btn-primary load-data"
          onClick={this.saveToStorage}
        >
          Load data
        </button>
      </div>
    );
  }
}

export default Admin;
