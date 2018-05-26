import React from 'react';

const Button = props => {
  return <button onClick={() => props.transaction(props.label)}>{props.label}</button>;
};

export default Button;
