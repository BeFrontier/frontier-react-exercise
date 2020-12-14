import React, { useState, useContext } from 'react'
import { ThemeContext } from '../../../../components/App'

import Label from '../../Label/Label';

import ElementProps from '../../../../types/ElementProps'

const MultichoiceElement = ({element, handleChange}: ElementProps<string>) => {
  const [value, setValue] = useState("");
  const theme = useContext(ThemeContext)

  const onChange = (event: any) => {
    setValue(event.target.value);
    handleChange(element.id, event.target.value, true)
  };

  const labelProps: Frontier.LabelType = {
    id: element.id,
    question_text: element.question_text,
    required: element.metadata.required,
  }

  return (
    <div className='row'>
      <Label {...labelProps} />
      <select
        id={element.id}
        placeholder = {element.metadata.placeholder || ''}
        value={value}
        onChange={onChange}
        className='col-xs-12 col-md-6 col-l-4'
        style={{color: theme.text_color}}
      >
        {element.metadata.options?.map(option => 
          <option value={option.value} key={option.value}>{option.label}</option>
        )}
      </select>
    </div>
  );
}

export default MultichoiceElement