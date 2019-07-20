import React, { Component } from "react";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import HomeLayout from "./components/HomeLayout";
import Login from "./components/LoginLayout";
import Main from "./components/Main";
import TableToPrint from "./components/TableToPrint";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeValueCustomer = this.handleChangeValueCustomer.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePrint = this.handlePrint.bind(this);
    this.handleChangeValueCode = this.handleChangeValueCode.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.returnRegisterTable = this.returnRegisterTable.bind(this);
    this.cleanTable = this.cleanTable.bind(this);

    this.state = {
      user: null,
      usuario: "",
      password: "",

      allCustomers: [],
      clientCode: "",
      clientName: "",
      customerId: [],
      showTable: false,
      valuePosnet: "",
      name: "?",
      valueCustomer: "0",
      loading: false,
      error_description: false,
      dataClients: {
        Entities: [
          {
            ClientId: 0,
            Name: "Seleccione cliente...",
            Code: "0",
            Posnets: [
              {
                PosnetId: 0,
                Number: "0"
              }
            ]
          }
        ]
      },
      defaultOptionClient: {
        ClientId: 0,
        Name: "Seleccione cliente...",
        Code: "0",
        Posnets: [
          {
            PosnetId: 0,
            Number: "0"
          }
        ]
      },
      transactionData: [],
      startDate: new Date(),
      endDate: new Date(),
      error: null
    };
  }

  componentWillMount() {
    fetch("http://132.148.19.159/api/client/Get?posnet=0")
      .then(res => res.json())
      .then(res => this.setState({ allCustomers: res }));
  }

  componentDidMount() {
    
  }

  fetchTransactionData = async () => {
    let day = this.state.startDate.getDate();
    let ClientCode = this.state.clientCode;
    if (parseInt(day) < 10) {
      day = "0" + day;
    }
    let month = parseInt(this.state.startDate.getMonth()) + 1;
    if (parseInt(month) < 10) {
      month = "0" + month;
    }
    let dayEnd = this.state.endDate.getDate();
    if (parseInt(dayEnd) < 10) {
      dayEnd = "0" + dayEnd;
    }
    let monthEnd = parseInt(this.state.endDate.getMonth()) + 1;
    if (parseInt(monthEnd) < 10) {
      monthEnd = "0" + monthEnd;
    }
    var dateStar = day + "-" + month + "-" + this.state.startDate.getFullYear();
    var dateEnd =
      dayEnd + "-" + monthEnd + "-" + this.state.endDate.getFullYear();
    var appendCode = ClientCode != undefined ? `&clientcode=${ClientCode}` : "";
    
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `http://132.148.19.159/api/account/Get/${
          this.state.valueCustomer
        }?datefrom=${dateStar}&dateTo=${dateEnd}` + appendCode
      );
      const transactionData = await response.json();
      this.setState({
        loading: false,
        transactionData: transactionData
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  fetchCustomersList(typeCustomer) {
    this.setState({ loading: true, error: null });
    try {
      fetch(`http://132.148.19.159/api/client/Get?posnet=${typeCustomer}`)
        .then(response => response.json())
        .then(dataClients => {
          dataClients.Entities.unshift(this.state.defaultOptionClient);
          
          this.setState({
            loading: false,
            dataClients: dataClients,
            valueCustomer: dataClients.Entities[0].ClientId
          });
        });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  }

  handleChange(e) {
    e.preventDefault();
    var typeCustomer = e.target.value;
    this.fetchCustomersList(typeCustomer);
    this.setState({
      transactionData: [],
      loading: false,
      clientCode: "",
      valuePosnet: typeCustomer
    });
  }
  handleChangeValueCustomer(e) {    
    var customerSelected = this.state.dataClients.Entities.find(function(
      element
    ) {
      return element.ClientId == e.target.value;
    });

    this.setState({
      valueCustomer: e.target.value,
      customerId: customerSelected,
      loading: false,
      transactionData: [],
      clientCode: "",
      clientName: ""
    });
  }

  handleChangeValueCode(e) {
    var customerFilterByCode = this.state.allCustomers.Entities.find(function(element) {
      return element.Code == e.target.value;
    });
    this.setState({
      clientCode: e.target.value,
      transactionData: [],
      customerId: customerFilterByCode,
      valueCustomer: "0",
      clientName: customerFilterByCode !== undefined ? customerFilterByCode.Name : ""
    });
  }

  handleChangeStartDate(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeEndDate(date) {
    this.setState({
      endDate: date
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  handleChangeUser(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  setInputRefUser = element => {
    this.inputUser = element;
  };

  setInputRefPass = element => {
    this.inputPass = element;
  };
  handleSignIn = async () => {
    this.setState({ loading: true, error: null });
    try {
      var datos = `username=${this.state.usuario}&password=${
        this.state.password
      }&grant_type=password`;
      const response = await fetch("http://132.148.19.159/OAuth/Token", {
        method: "POST",
        body: datos
      });
      const dataUser = await response.json();
      if (dataUser.access_token !== undefined) {
        this.setState({ user: dataUser, loading: false });
      } else {
        this.setState({
          loading: false,
          error_description: true
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  handleSubmit() {
    if (this.state.usuario && this.state.password != null) {
      this.handleSignIn();
      this.setState({
        error_description: undefined,
        loading: true
      });
    } else {
      this.setState({
        error_description: true,
        loading: false
      });
    }
  }
  handleLogout() {
    this.setState({
      user: null,
      usuario: undefined,
      password: undefined,
      transactionData: "",
      clientCode: "",
      valueCustomer: "0",
      valuePosnet: "-1",
      startDate: new Date(),
      endDate: new Date()
    });
  }

  handlePrint() {
    this.setState({
      showTable: true
    });
  }

  returnRegisterTable() {
    this.setState({
      showTable: false
    });
  }

  cleanTable() {
    this.setState({
      transactionData: []
    });
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    var options = [
      {
        name: "Select…",
        value: "-1"
      },
      {
        name: "Con Posnet",
        value: "2"
      },
      {
        name: "Sin Posnet",
        value: "1"
      },
      {
        name: "Todos",
        value: "0"
      }
    ];

    const columns = [
      {
        Header: "Fecha Comprobante",
        accessor: "ReceiptDateFormat", // String-based value accessors!
        className: "centerCell"
      },
      {
        Header: "N Comprobante",
        accessor: "ReceiptNumber", // String-based value accessors!
        className: "centerCell"
      },
      {
        Header: "Tipo",
        accessor: "ReceiptType", // String-based value accessors!
        className: "centerCell"
      },
      {
        Header: "Debe",
        accessor: "Debit", // String-based value accessors!
        className: "centerCell"
      },
      {
        Header: "Haber",
        accessor: "Assets", // String-based value accessors!
        className: "centerCell"
      },
      {
        Header: "Saldo",
        accessor: "Subtotal", // String-based value accessors!
        className: "centerCell"
      }
    ];

    if (this.state.showTable) {
      return (
        <TableToPrint
          transactionData={this.state.transactionData}
          optionsCustomer={this.state.dataClients.Entities}
          dataHeader={this.state.customerId}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChangeUser}
          returnTable={this.returnRegisterTable}
        />
      );
    }
    return (
      <HomeLayout>
        {this.state.user ? (
          <Main
            handleLogout={this.handleLogout}
            handleChange={this.handleChange}
            valuePosnet={this.state.valuePosnet}
            options={options}
            onChangeCustomer={this.handleChangeValueCustomer}
            valueCustomer={this.state.valueCustomer}
            optionsCustomer={this.state.dataClients.Entities}
            selected={this.state.startDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            handleChangeStartDate={this.handleChangeStartDate}
            selectedEndDate={this.state.endDate}
            onChangeEndDate={this.handleChangeEndDate}
            minDate={this.state.startDate}
            maxDate={this.state.startDate}
            loading={this.state.loading}
            onClickFetchTransactionData={() => this.fetchTransactionData()}
            data={this.state.transactionData.Entities}
            columns={columns}
            dataTable={this.state.dataTable}
            handleToggle={this.handleToggle}
            isOpen={this.state.dropdownOpen}
            transactionData={this.state.transactionData}
            handlePrint={this.handlePrint}
            handleChangeValueCode={this.handleChangeValueCode}
            valueClientCode={this.state.clientCode}
            buttonPrint={this.state.buttonPrint}
            handlePage={this.handlePage}
            allCustomers={this.state.allCustomers}
            cleanTable={this.cleanTable}
            clientName={this.state.clientName}
          />
        ) : (
          <Login
            setRefUser={this.setInputRefUser}
            setRefPass={this.setInputRefPass}
            handleChange={this.handleChangeUser}
            handleSubmit={this.handleSubmit}
            loading={this.state.loading}
            errorDescription={this.state.error_description}
            usuario={this.state.usuario}
            password={this.state.password}
            handleKeyPress={this.handleKeyPress}
          />
        )}
      </HomeLayout>
    );
  }
}

export default App;
