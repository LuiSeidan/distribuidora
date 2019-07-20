import React from "react";
import "../App.css";
import Dropdown from "./Dropdown";
import DropdownCustomer from "./DropdownCustomer";
import Table from "./Table";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";
import CustomerCode from "./CustomerCode";

registerLocale("es", es);

function Main(props) {
  return (
    <div>
      <Navbar handleLogout={props.handleLogout} />
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-auto col-lg-4 col-xl-4 mt-2 dropdown">
            <Dropdown
              onChange={props.handleChange}
              value={props.valuePosnet}
              options={props.options}
            />
            <div className="mt-2">
              <DropdownCustomer
                onChange={props.onChangeCustomer}
                value={props.valueCustomer}
                options={props.optionsCustomer}
              />
              <div>
                <CustomerCode
                  onChangeCustomer={props.onChangeCustomer}
                  onChange={props.handleChangeValueCode}
                  value={props.valueClientCode}
                  onBlur={props.onClickFetchTransactionData}
                  options={props.optionsCustomer}
                  clientName={props.clientName}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto col-8 col-md-2 col-lg-2 col-xl-2 mt-2 date-desde">
            <label htmlFor="exampleFormControlSelect1">Desde:</label>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              locale="es"
              selected={props.selected}
              selectsStart
              startDate={props.startDate}
              endDate={props.endDate}
              maxDate={props.endDate}
              onChange={props.handleChangeStartDate}
            />
          </div>
          <div className="mx-auto col-8 col-md-3 col-lg-2 col-xl-2 mt-2 date-hasta">
            <label htmlFor="exampleFormControlSelect1">Hasta:</label>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              locale="es"
              selected={props.selectedEndDate}
              selectsEnd
              startDate={props.startDate}
              endDate={props.endDate}
              onChange={props.onChangeEndDate}
              minDate={props.minDate}
            />
          </div>
          <div className="col-8 col-md-2 co-lg-2 col-xl-2 my-2 button-table">
            {props.loading ? (
              <button
                type="button"
                className="btn btn-primary "
                onClick={e => {
                  props.cleanTable();
                  props.onClickFetchTransactionData();
                }}
              >
                Cargando
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary "
                onClick={e => {
                  props.cleanTable();
                  props.onClickFetchTransactionData();
                }}
              >
                Buscar
              </button>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-sm mb-5">
            <Table
              data={props.data}
              columns={props.columns}
              loading={false}
              filterable={true}
            />
            {props.data && (
              <button
                onClick={() => props.handlePrint()}
                type="button"
                className="btn btn-block btn-danger"
              >
                Vista Previa
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
