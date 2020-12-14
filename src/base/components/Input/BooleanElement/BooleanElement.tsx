import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../../components/App'

import Label from '../../Label/Label';

import ElementProps from '../../../../types/ElementProps'

const BooleanElement = ({element, handleChange}: ElementProps<boolean>) => {
  const [value, setValue] = useState(false);
  const theme = useContext(ThemeContext)

  useEffect(() => {
    handleChange(element.id, false, true) 
  })

  const onChange = (event: any) => {
    setValue(event.target.checked);
    handleChange(element.id, value, true) 
  };

  const labelProps: Frontier.LabelType = {
    id: element.id,
    question_text: element.question_text,
    required: element.metadata.required,
  }

  return (
    <div className='row'>
      <Label
        {...labelProps}
      />
      <div className='col-xs-12 col-md-6 col-l-4'>
        <input
          required = {element.metadata.required}
          placeholder = {element.metadata.placeholder || ''}
          type='checkbox'
          onChange={onChange}
          style={{color: theme.text_color, backgroundColor: theme.background_color}}
        /><span>Yes</span>
      </div>
    </div>
  );
}

export default BooleanElement