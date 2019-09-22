import React from 'react';

const Lightboard = props => {
  const filterSpecOne = props.customerList.map((item, i) => {
    if (item.specName === 'Janine') {
      return (
        <div
          key={i}
          className={i === 0 ? 'customer first-element' : 'customer'}
        >
          <div className="customer-wrapper">
            <div className="number">{i + 1}</div>
            <div className="name">
              <span className="firstname">{item.custFirstName}</span>
              <span className="lastname">{item.custLastName}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  const filterSpecTwo = props.customerList.map((item, i) => {
    if (item.specName === 'Shirley') {
      return (
        <div
          key={i}
          className={i === 0 ? 'customer first-element' : 'customer'}
        >
          <div className="customer-wrapper">
            <div className="number">{i + 1}</div>
            <div className="name">
              <span className="firstname">{item.custFirstName}</span>
              <span className="lastname">{item.custLastName}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  const filterSpecThree = props.customerList.map((item, i) => {
    if (item.specName === 'John') {
      return (
        <div
          key={i}
          className={i === 0 ? 'customer first-element' : 'customer'}
        >
          <div className="customer-wrapper">
            <div className="number">{i + 1}</div>
            <div className="name">
              <span className="firstname">{item.custFirstName}</span>
              <span className="lastname">{item.custLastName}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
  return (
    <div className="container-md specialist">
      <div className="specialist specialist--left">
        <div className="list">
          <h2>Janine</h2>
          {filterSpecOne}
        </div>
      </div>
      <div className="specialist specialist--middle">
        <div className="list">
          <h2>Shirley</h2>
          {filterSpecTwo}
        </div>
      </div>
      <div className="specialist specialist--right">
        <div className="list">
          <h2>John</h2>
          {filterSpecThree}
        </div>
      </div>
    </div>
  );
};

export default Lightboard;
