import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../../components/App'

import Label from '../../Label/Label'

import ElementProps from '../../../../types/ElementProps'

import '../Elements.scss'

type Validity = 'valid' | 'invalid' | 'unset'

const TextElement = ({element, handleChange}: ElementProps<string>) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState<Validity>(checkValidInput('') ? 'valid' : 'unset');
  const theme = useContext(ThemeContext)

  useEffect(() => {
    handleChange(element.id, value, isValid === 'valid') 
  })

  const onChange = (event: any) => {
    setValue(event.target.value);
    setIsValid(!checkValidInput(event.target.value) ? 'invalid' : 'valid');
    handleChange(element.id, event.target.value, isValid === 'valid')
  };

  function checkValidInput(value: string): boolean {
    if (value.length === 0 && element.metadata.required){
      return false
    } else {
      if (element.metadata.pattern) {
        const regex = RegExp(element.metadata.pattern);
        if (!regex.test(value)) {
          return false
        }
      }
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
      <input
        id={element.id}
        type={element.metadata.format || 'text'}
        step={element.metadata.step}
        value={value}
        onChange={onChange}
        onBlur={event  => checkValidInput(event.target.value)}
        placeholder={element.metadata.placeholder}
        style={{color: theme.text_color}}
        className={`col-xs-12 col-md-6 col-l-4 ${isValid}`}
      ></input>
    </div>
  );
}

export default TextElement