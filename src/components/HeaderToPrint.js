import React from "react";

export default function HeaderToPrint(props) {
  return (
    <div className="container header-container">
      <div className="row justify-content-start">
        <div className="col mx-auto">
          <img src={require("../image/logo.JPG")} alt="logo" />
          <h6
            className="text-left mt-3"
            style={{ fontWeight: "bold", fontFamily: "Cantarell" }}
          >
            Mail: distribuidoratrocadero@hotmail.com
          </h6>
          <h5 style={{ fontWeight: "bold", fontFamily: "Cantarell" }}>
            Celular: 011-15-2595-33-22
          </h5>
          <hr />
          <h6
            className="text-left"
            style={{ fontWeight: "bold", fontFamily: "Cantarell" }}
          >
            N° Cliente: {props.dataHeader.Code}
          </h6>

          <h6
            className="text-left"
            style={{ fontWeight: "bold", fontFamily: "Cantarell" }}
          >
            Razón Social: {props.dataHeader.Name}
          </h6>
        </div>
        <div className="col mx-auto">
          <h3 className="cuenta-corriente">
            <u>Cuenta Corriente Cliente</u>
          </h3>
          <h4 style={{ fontFamily: "Cantarell", fontWeight: "bold" }}>
            Fecha Desde: {props.startDate}
          </h4>
          <h4 style={{ fontFamily: "Cantarell", fontWeight: "bold" }}>
            Fecha Hasta: {props.endDate}
          </h4>
        </div>
      </div>
    </div>
  );
}
