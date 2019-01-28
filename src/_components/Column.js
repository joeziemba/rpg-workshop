import React from 'react';

const Column = (props) => {
  let sizeClass;
  switch (props.stackSize) {
    case 'small':
      sizeClass = 'col-sm';
      break;
    case 'med':
      sizeClass = 'col-md';
      break;
    default:
      sizeClass = 'col-sm';
      break;
  }

  return (
    <div className={`col ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Column;