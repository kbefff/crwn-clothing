import React from 'react';

import './form-input.styles.scss'


const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
      <input className='form-input' onChange={handleChange} {...otherProps} />

        {/* with label prop we are going to selectively use a label
        we are going to create a label component, otherwise we are going to render nothing */}
      {
          label ?
        /*   here what we are rendering is our label
        selectively render a string interpolated value
        if our value is in, we are going to apply the class of shrink
        otherwise it will be an empty string
        and it will always be a form input label.
        this is mainly for certain browsers that will autocomplete when you get to that portionof the sign in */

          (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
          </label>)
          : null
      }
    </div>
)


export default FormInput;