import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.png';


const Profile = ({user}) => (
<div className="profile">
  <div className="description">
    <img
      src={user.avatar}
      alt="User's avatar"
      className="avatar"
    />
    <p className="name">{user.name}</p>
    <p className="tag">@{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
)

Profile.defaultProps = {
    avatar: defaultImg,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

Profile.propTypes = {
    avatar: PropTypes.string,
}

export default Profile;