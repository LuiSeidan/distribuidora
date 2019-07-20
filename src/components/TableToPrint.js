import React from "react";
import HeaderToPrint from "../components/HeaderToPrint";
import moment from "moment";
import ReactExportToExcel from "react-html-table-to-excel";

export default function TableToPrint(props) {
  return (
    <div className="container mt-5 box">
      <HeaderToPrint
        transactionData={props.fetchTransactionData}
        options={props.optionsCustomer}
        startDate={moment(props.startDate).format("DD/MM/YYYY")}
        endDate={moment(props.endDate).format("DD/MM/YYYY")}
        dataHeader={props.dataHeader}
      />
      <div className="row justify-content-center">
        <div className="col  mx-auto">
          <table id="report" className="mt-5 table table-bordered">
            <thead>
              <tr>
                <th className="text-center">
                  N° de Cliente: {props.dataHeader.Code}
                </th>
                <th className="text-center">
                  Razon social: {props.dataHeader.Name}
                </th>
                <th className="text-center">
                  Fecha desde: {moment(props.startDate).format("DD/MM/YYYY")}
                </th>
                <th className="text-center">
                  Fecha hasta: {moment(props.endDate).format("DD/MM/YYYY")}
                </th>
              </tr>
              <tr className="text-capitalize">
                <th className="centerCell">Fecha</th>
                <th className="centerCell">Tipo</th>
                <th className="centerCell">Factura N°</th>
                <th className="centerCell">Debe</th>
                <th className="centerCell">Haber</th>
                <th className="centerCell">Saldo</th>
              </tr>
            </thead>
            <tbody>
              {props.transactionData.Entities.map(item => (
                <tr key={item.id}>
                  <td className="centerCell">{item.ReceiptDateFormat}</td>
                  <td className="centerCell">{item.ReceiptType}</td>
                  <td className="centerCell">{item.ReceiptNumber}</td>
                  <td className="centerCell">{item.Debit}</td>
                  <td className="centerCell">{item.Assets}</td>
                  <td className="centerCell">{item.Subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="btn float-left text-uppercase btn-info btn-lg button-print"
            onClick={props.returnTable}
          >
            volver
          </button>
          <ReactExportToExcel
            id="table-to-excel"
            className="btn float-right text-uppercase btn-success btn-lg button-print"
            table="report"
            filename="reporte"
            sheet="tabla-reporte"
            buttonText="Descargar Excel"
          />
          <button
            className="btn float-right text-uppercase btn-danger btn-lg button-print"
            onClick={() => window.print()}
          >
            imprimir
          </button>
        </div>
      </div>
    </div>
  );
}
