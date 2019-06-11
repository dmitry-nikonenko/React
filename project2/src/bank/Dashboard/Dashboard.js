import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Balance from '../Balance/Balance';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    inputData: '',
    balance: 0,
    income: 0,
    outcome: 0,
    history: [],
    trn: '',
  };

  onChange = e => this.setState({ inputData: +e.target.value });

  onClick = e => {
    if (e.target.textContent === 'Deposit') {
      this.setState(
        {
          balance: this.state.inputData + this.state.balance,
          income: this.state.income + this.state.inputData,
          trn: 'Deposit',
        },
        this.addTr,
      );
    } else if (e.target.textContent === 'Withdraw') {
      this.setState(
        prevState => ({
          balance: prevState.balance - prevState.inputData,
          outcome: prevState.outcome + prevState.inputData,
          trn: 'Withdraw',
        }),
        this.addTr,
      );
    }
  };

  addTr = () => {
    const newArr = [...this.state.history];
    newArr.push({
      trn: this.state.trn,
      amount: this.state.inputData,
      date: new Date().toLocaleString(),
    });

    this.setState({
      history: newArr,
    });
  };

  render() {
    return (
      <div className={styles.dashboard}>
        <Controls onChange={this.onChange} onClick={this.onClick} />
        <Balance
          income={this.state.income}
          outcome={this.state.outcome}
          balance={this.state.balance}
        />
        <TransactionHistory
          addTr={this.addTr}
          trn={this.state.trn}
          history={this.state.history}
        />
      </div>
    );
  }
}
export default Dashboard;
