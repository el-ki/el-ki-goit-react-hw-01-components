import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.png';
import styles from './Friends.module.css';

const Friends = ({ avatar, name, isOnline }) => (
  <div className={styles.wrapper}>
    <span
      className={styles.status}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    ></span>
    <img
      className={styles.avatar}
      src={avatar}
      width="48"
      alt="Friend's avatar"
    />
    <p className={styles.name}>{name}</p>
  </div>
);

Friends.defaultProps = {
  avatar: defaultImg,
};

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friends;
