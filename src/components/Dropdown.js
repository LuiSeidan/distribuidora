import React from "react";

function Dropdown(props) {
  return (
    <div>
      <select
        className="form-control"
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map(item => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Dropdown;
