import React from 'react';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ history }) => (
  <table class="history">
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {history.map(el => (
        <tr>
          <td>{el.trn}</td>
          <td>{el.amount}</td>
          <td>{el.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
