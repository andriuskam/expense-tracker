import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import GlobalProvider from "./context/GlobalState";


export default function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <div className="side">
            <Balance />
            <IncomeExpenses />
            <AddTransaction />
          </div>
          <div className="main">
            <TransactionList />
          </div>

        </div>
      </GlobalProvider>
    </div>
  );
}