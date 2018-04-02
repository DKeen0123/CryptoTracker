import React from 'react';

const ChangeBalance = props => {
  return (
    <div>
      <input className="input-balance" onChange={props.changeBalance} />
    </div>
  );
};

export default ChangeBalance;
