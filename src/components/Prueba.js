<div>
<ReactToPrint
trigger={() => <a href="#">Print this out!</a>}
content={() => this.componentRef}
/>
<ComponentToPrint transactionData={this.state.transactionData} headerData={columns} ref={el => (this.componentRef = el)} />
</div>
// este es un componente nuevo 
import React, { Component } from "react";
import RowTable from "./RowTable";

export default class ComponentToPrint extends Component {
render() {
return (
<div>
<RowTable headerTable = {this.props.header}/> 
</div>

);
}
}
// este es otro componente 
import React from "react";

function RowTable(props) {
var entities = [
{
"ReceiptDate": "0001-01-01T00:00:00Z",
"ReceiptDateFormat": "",
"ReceiptNumber": null,
"ReceiptType": "SA",
"Debit": "",
"Assets": "44652.96",
"Subtotal": "44652.96"
},
{
"ReceiptDate": "2019-05-28T09:38:37Z",
"ReceiptDateFormat": "28-05-2019 09:38:37",
"ReceiptNumber": "0001________",
"ReceiptType": "TAR",
"Debit": "",
"Assets": "10.00",
"Subtotal": "44662.96"
},
{
"ReceiptDate": "2019-05-28T09:39:02Z",
"ReceiptDateFormat": "28-05-2019 09:39:02",
"ReceiptNumber": "0001________",
"ReceiptType": "ANU",
"Debit": "10.00",
"Assets": "",
"Subtotal": "44652.96"
},
{
"ReceiptDate": "2019-05-28T09:46:37Z",
"ReceiptDateFormat": "28-05-2019 09:46:37",
"ReceiptNumber": "0001________",
"ReceiptType": "TAR",
"Debit": "",
"Assets": "10.00",
"Subtotal": "44662.96"
},
{
"ReceiptDate": "2019-05-28T09:47:07Z",
"ReceiptDateFormat": "28-05-2019 09:47:07",
"ReceiptNumber": "0001________",
"ReceiptType": "ANU",
"Debit": "10.00",
"Assets": "",
"Subtotal": "44652.96"
},
{
"ReceiptDate": "2019-05-28T09:52:41Z",
"ReceiptDateFormat": "28-05-2019 09:52:41",
"ReceiptNumber": "0001________",
"ReceiptType": "TAR",
"Debit": "",
"Assets": "10.00",
"Subtotal": "44662.96"
},
{
"ReceiptDate": "2019-05-28T09:52:41Z",
"ReceiptDateFormat": "28-05-2019 09:52:41",
"ReceiptNumber": "0001________",
"ReceiptType": "TAR",
"Debit": "",
"Assets": "10.00",
"Subtotal": "44672.96"
},
{
"ReceiptDate": "2019-05-28T09:53:05Z",
"ReceiptDateFormat": "28-05-2019 09:53:05",
"ReceiptNumber": "0001________",
"ReceiptType": "ANU",
"Debit": "10.00",
"Assets": "",
"Subtotal": "44662.96"
},
{
"ReceiptDate": "2019-05-28T09:53:05Z",
"ReceiptDateFormat": "28-05-2019 09:53:05",
"ReceiptNumber": "0001________",
"ReceiptType": "ANU",
"Debit": "10.00",
"Assets": "",
"Subtotal": "44652.96"
},
{
"ReceiptDate": "2019-05-28T09:59:12Z",
"ReceiptDateFormat": "28-05-2019 09:59:12",
"ReceiptNumber": "0001________",
"ReceiptType": "TAR",
"Debit": "",
"Assets": "10.25",
"Subtotal": "44663.21",
},


import React from "react";

function RowTable(props) {
var entities = [
{
"ReceiptDate": "2019-05-28T09:59:12Z",
"ReceiptDateFormat": "28-05-2019 09:59:12",
"ReceiptNumber": "0001________",
"ReceiptType": "TAR",
"Debit": "",
"Assets": "10.25",
"Subtotal": "44663.21"
},
{
"ReceiptDate": "2019-05-28T10:12:00Z",
"ReceiptDateFormat": "28-05-2019 10:12:00",
"ReceiptNumber": "0001________",
"ReceiptType": "ANU",
"Debit": "10.50",
"Assets": "",
"Subtotal": "44652.96"
}
];
return (
<div>
{
entities.map((item, index) =>
<tr key={index}>
<td>{item.ReceiptDate}</td>
</tr>
)
}

</div>
);
}
export default RowTable;