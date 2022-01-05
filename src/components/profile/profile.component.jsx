import React from 'react';
import './profile.styles.scss';
import image from '../../assets/image-aqeel.jpeg';

const ProfileCard = props => {
  return (
    <div className="card-container">
      <header>
        <img className="img" src={image} alt={props.name} />
      </header>
      <h1 className="user-name">{props.name}</h1>
      <p className="location">
        <i class="fas fa-map-marker-alt"></i>
        {props.location}
      </p>
      <div className="description">{props.description}</div>
      <footer>
        <a href="https://www.facebook.com/mohommad.aqeel.5/" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/_aqeel_._/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-aqeel-8852b9213/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/MuhammadAqeel_" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </footer>
    </div>
  );
};

export default ProfileCard;
