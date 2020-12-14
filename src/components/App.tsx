import React, { useRef, useState } from 'react';
import Section, { SectionProps } from './Section/Section'
import formInstructions from '../data/form_instructions.json';

const job = formInstructions as Frontier.Job;
export const ThemeContext = React.createContext(job.theme);


function App() {
  const ref = useRef( {values:new Map<string,Map<string,boolean|string>>(), isValid:true})
  const [state, setState] = useState(true)
  
  function handleSectionChange(id: string, sectionValue: Map<string, boolean|string>, isValid: boolean) {
    ref.current.values= ref.current.values.set(id,sectionValue)
    ref.current.isValid = ref.current.isValid && isValid
    setState(ref.current.isValid)
  }

  return (
    <div>
      {job.sections.map(section => {
        let sectionProps: SectionProps = {section, handleSectionChange};
        return <Section {...sectionProps} key={section.id}></Section>
        }
      )}
    </div>
  );
}

export default App;
