import React from "react";

export default function Footer(props) {
  console.log(props.data);
  return (
    <button
      type="submit"
      className="btn btn-lg btn-block btn-primary text-capitalize"
      onClick={props.onClick}
    >
      imprimir
    </button>
  );
}
