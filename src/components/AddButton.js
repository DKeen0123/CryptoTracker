import React from 'react';

const AddButton = props => {
  return <button onClick={props.addCrypto}>{props.label}</button>;
};

export default AddButton;