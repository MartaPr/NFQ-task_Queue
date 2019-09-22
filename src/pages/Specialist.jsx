import React from 'react';
import Button from '../components/Button';

const Specialist = props => {
  return (
    <div className="container">
      <div className="radio-buttons">
        <label className="input-container">
          Janine
          <input
            type="radio"
            value="Janine"
            onChange={props.filtered}
            checked={props.selectedOption === 'Janine'}
          />
          <span className="checkmark"></span>
        </label>
        <label className="input-container">
          Shirley
          <input
            type="radio"
            value="Shirley"
            onChange={props.filtered}
            checked={props.selectedOption === 'Shirley'}
          />
          <span className="checkmark"></span>
        </label>
        <label className="input-container">
          John
          <input
            type="radio"
            value="John"
            onChange={props.filtered}
            checked={props.selectedOption === 'John'}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      {/* <Button
        className="btn btn-danger"
        text="Delete"
        onClick={props.deleteItem}
      /> */}
      <div className="list">{props.results}</div>
    </div>
  );
};

export default Specialist;
