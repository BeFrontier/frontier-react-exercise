import React, { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../App'

import '../../base/styles/grid.scss';
import './Section.scss'

import ElementFactory from './ElementFactory'

export interface SectionProps {
  section: Frontier.Section,
  handleSectionChange: (_:string, __:Map<string, boolean|string>, isValid: boolean) => void
}

const Section = ({ section, handleSectionChange }: SectionProps) => {
  const refValue= useRef({ values: new Map<string, boolean|string>(), isValid: true});
  const refValidEle= useRef({values: new Map<string, boolean>()});
  
  const [validSectionState, setValidSection] = useState(true)
  const theme = useContext(ThemeContext)

  function handleChange(id: string, elementValue: boolean | string, isValidElement: boolean) {
    refValue.current.values.set(id, elementValue)
    refValidEle.current.values.set(id, isValidElement)
    refValue.current.isValid = Array.from(refValidEle.current.values.values()).every(x => x)

    setValidSection(refValue.current.isValid)   

    handleSectionChange(section.id, refValue.current.values, refValue.current.isValid)
  }

  const displayData = () => {
    console.log(refValue.current.values)
  }

  return(
    <form
      id={section.id}
      className="container"
      style={{backgroundColor: theme.background_color}}
    >
      <h1>{section.title}</h1>
      <div>
        {section.content.map(element => {
          return ElementFactory({element, handleChange})
        })}
      </div>
      <div className='submit-form-button'>
        <input type="button" value="Submit" onClick={displayData} disabled={!validSectionState} />
      </div>
    </form>
  )
}

export default Section