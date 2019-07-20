import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

function Table(props) {
  return (
    <div>
      <ReactTable
        pageText={"Pagina"}
        ofText={"de"}
        rowsText={"Registros"}
        previousText={"Anterior"}
        nextText={"Siguiente"}
        noDataText={"No se encontraron registros"}
        defaultPageSize={10}
        data={props.data}
        columns={props.columns}
        loading={props.loading}
        filterable={props.filterable}
      />
    </div>
  );
}
export default Table;
