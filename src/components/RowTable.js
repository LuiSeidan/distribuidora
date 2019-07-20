import React from "react";

function RowTable(props) {
  var entities = [
    {
      ReceiptDate: "2019-05-28T09:59:12Z",
      ReceiptDateFormat: "28-05-2019 09:59:12",
      ReceiptNumber: "0001________",
      ReceiptType: "TAR",
      Debit: "",
      Assets: "10.25",
      Subtotal: "44663.21"
    },
    {
      ReceiptDate: "2019-05-28T10:12:00Z",
      ReceiptDateFormat: "28-05-2019 10:12:00",
      ReceiptNumber: "0001________",
      ReceiptType: "ANU",
      Debit: "10.50",
      Assets: "",
      Subtotal: "44652.96"
    }
  ];
  return (
    <div>
      {entities.map((item, index) => (
        <h1 key={index}>{item.ReceiptDate}</h1>
      ))}
    </div>
  );
}
export default RowTable;
