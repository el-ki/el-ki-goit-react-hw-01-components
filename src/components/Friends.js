import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.png';

const Friends = ({ avatar, name, isOnline }) => (
    <div>
        <span className="status">кружок {isOnline ? 'зеленый' : 'красный' }</span>
        <img className="avatar" src={avatar} width="48"
            alt="Friend's avatar"
        />
        <p className="name">{name}</p>
    </div>
);

Friends.defaultProps = {
    avatar: defaultImg,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

Friends.propTypes = {
    avatar: PropTypes.string,

}

export default Friends;