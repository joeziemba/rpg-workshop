import React from 'react';

const Column = (props) => {
  let sizeClass;
  switch (props.stackSize) {
    case 'small':
      sizeClass = 'col-sm';
      break;
    default:
      break;
  }

  return (
    <div className={`${sizeClass}`}>
      {props.children}
    </div>
  );
}

export default Column;