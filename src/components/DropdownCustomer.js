import React from "react";

function DropdownCustomer(props) {
  console.log(props.options);
  return (
    <div className="form-group has-search">
      <select
        className="form-control"
        onChange={props.onChange}
        value={props.value}
        defaultValue="0"
      >
        {props.options.map(item => (
          <option key={item.ClientId} value={item.ClientId}>
            {item.Name}
          </option>
        ))}
      </select>
    </div>

    // <div  >
    //   <select className="form-control" onChange={props.onChange} value={props.ClientId}>
    //     {props.options.map(item => (
    //       <option key={item.ClientId} value={item.ClientId}>
    //         {item.Name}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
}
export default DropdownCustomer;
