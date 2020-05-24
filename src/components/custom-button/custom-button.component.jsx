import React from 'react';

import './custom-button.styles.scss'



// this is going to be a presentational componenet --> a functional componenet with no state
// we are building as own componenet so that it can be used in any other component that might need
// consistent componenet styling across the project

const CustomButton = ({children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}

    </button>
)

export default CustomButton