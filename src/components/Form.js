import React from "react";
import classes from "./Form.module.css";
import InputElement from "./InputElement";
const Form = ({ schema }) => {
  let fields = schema.fields


  return (<form id="form" style={{ display: "flex", flexDirection: "column" }}>
    {
      fields.map((field, i) => {
        return <div style={{ order: field.order }} key={i}>
          <InputElement field={field} key={i} />
        </div>

      })
    }
    <div style={{ width: "100%", marginTop: "20px", order: 100 }}><button form="form">Submit</button>
    </div>
  </form>)
};
export default Form;
