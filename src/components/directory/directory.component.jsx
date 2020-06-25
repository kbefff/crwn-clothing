import React from 'react';
// with Router is a higher order component
import { connect } from 'react-redux';


import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory =({ sections }) => {
    <div className='directory-menu'>
      {sections.map(({id, ...otherSectiionProps }) => (
        <MenuItem key={id} {...otherSectiionProps} />
      ))}
    </div>
  );

}
const mapStateToProps = ({})

export default Directory;