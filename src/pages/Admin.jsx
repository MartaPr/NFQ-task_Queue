import React from 'react';
import Button from '../components/Button';

const Admin = props => {
  return (
    <div className="container-md button-container">
      <Button
        className="btn btn-primary load-data"
        onClick={props.saveData}
        text={'Load data'}
      />
    </div>
  );
};

export default Admin;
