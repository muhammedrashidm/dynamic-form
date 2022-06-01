import React from 'react';
import classes from './Form.module.css';


const InputElement = ({ field }) => {
  const createInput = () => {
    if (field.type === "dropdown") {
      return (<div
        className={classes.item_container}
      >
        <label htmlFor={field.key}>{field.label}</label>
        <select
          id={field.key}
          form="form"
          required={field.isRequired}
          readOnly={field.isReadonly}
        >
          {field.items.map((item, i) =>
            <option key={i} value={item.value}>{item.text}</option>)}
        </select>
      </div>)
    }
    return (
      <div
        className={classes.item_container}
      >
        <label htmlFor={field.key}>{field.label}</label>
        <input
          form='form'
          id={field.key}
          type={field.type}
          required={field.isRequired}
          readOnly={field.isReadonly} />
      </div>)
  }

  return createInput();
};



export default InputElement;
