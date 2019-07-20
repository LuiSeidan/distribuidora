import RowTable from "./RowTable";
import React from "react";

function ComponentToPrint(props) {
  return (
    <div>
      <RowTable headerTable={props.transactionData} />
    </div>
  );
}
export default ComponentToPrint;
