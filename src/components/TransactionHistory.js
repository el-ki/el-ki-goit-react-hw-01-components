import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionDescription}>
      <thead>
        <tr className={styles.title}>
          <th className={styles.type}>Type</th>
          <th className={styles.amount}>Amount</th>
          <th className={styles.currency}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.transactionItems}>
        {items.map(item => (
          <tr className={styles.content} key={item.id}>
            <td className={styles.type}>{item.type}</td>
            <td className={styles.amount}>{item.amount}</td>
            <td className={styles.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
