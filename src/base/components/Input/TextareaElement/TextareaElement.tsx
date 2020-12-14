import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../../components/App'

import Label from '../../Label/Label';

import ElementProps from '../../../../types/ElementProps';

const TextElement= ({element, handleChange}: ElementProps<string>) => {
  const [value, setValue] = useState("");
  const theme = useContext(ThemeContext)

  useEffect(() => {
    handleChange(element.id, value,  checkValidInput(value)) 
  })

  const onChange = (event: any) => {
    setValue(event.target.value);
    handleChange(element.id, event.target.value, checkValidInput(event))
  };

  const checkValidInput = (value: string): boolean => {
    if (value.length === 0 && element.metadata.required){
      return false
    }
    return true
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
      <textarea
        value={value}
        onChange={onChange}
        onBlur={event => checkValidInput(event.target.value)}
        style={{color: theme.text_color}}
        className='col-xs-12 col-md-6 col-l-4'
      ></textarea>
    </div>
  );
}

export default TextElement 