import React from "react";

export default function CustomerCode(props) {
  return (
    <div>
      <input
        type="text"
        onChange={props.onChange}
        size="35"
        placeholder="Ingrese el codigo del cliente"
        className="mb-3 customer-code"
        value={props.value}
        // onBlur={props.onBlur}
      />
      <label style={{fontWeight:'bold'}}>{props.clientName}</label>
    </div>
  );
}