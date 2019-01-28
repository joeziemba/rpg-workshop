import React from 'react';
import Row from './Row';
import Column from './Column';

const InputFlat = (props) => {
  return (
    <div className="form-group">
      <Row>
        <Column className='col-3'>
          <label htmlFor={props.id}>{props.label}</label>
        </Column>
        <Column className='col-9'>
          <input
            type="email"
            className="form-control form-control-sm"
            id={props.id}
            aria-describedby={`${props.id}Help`}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            name={props.fieldName}
          />
          <small id={`${props.id}Help`} className="form-text text-muted">{props.supportText}</small>
        </Column>
      </Row>

    </div>
  )
}

export default InputFlat;