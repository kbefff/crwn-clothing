import React from 'react';
// which is essentially a  func that takes a component as an argument 
// and returns a modified component

// empowering our menu item to have access to things related to our routre
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

// with router will return us back the menuitem super powered with access 
// to those location match and history props we need access to
export default withRouter(MenuItem);