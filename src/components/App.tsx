/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import formInstructions from '../data/form_instructions.json';
import { FormContainer } from './FormComponents/FormContainer';
import { ThemeContext } from '../hooks/useTheme';

function App() {
  const job = formInstructions as Frontier.Job;

  // Check your console to see the full instructions!
  console.log(job);

  return (
    <div css={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <img
          src="https://frontier-public-assets.s3-us-west-2.amazonaws.com/frontier-corona-logo.svg"
          alt="Frontier Logo"
        />
        <h1>👋 Hello from Team Frontier!</h1>
        <p>
          Good luck with the exercise. If you have any questions please email Jason:
          jason@frontier.jobs
        </p>
        <h2>Hello from Oleksandra</h2>
        <p>Thank you for interesting task :) See description in email.</p>
        <ThemeContext.Provider value={job.theme}>
          <FormContainer sections={job.sections} />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
