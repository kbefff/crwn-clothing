import React from 'react';
// with Router is a higher order component



import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectiionProps }) => (
          <MenuItem key={id} {...otherSectiionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;