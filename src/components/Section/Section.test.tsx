import React from 'react';
import './components/Input/node_modules/@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Section, { SectionProps } from './Section';
import userEvent from '@testing-library/user-event';

const testSectionProps: SectionProps = {
  section: {
    title: 'Title',
    id: 'unique-id',
    content: [
      {
        "id": "fullname",
        "type": "text",
        "metadata": {
          "format": "text",
          "required": true
        },
        "question_text": "Full name"
      },
      {
        "id": "email",
        "type": "text",
        "metadata": {
          "format": "email",
          "pattern": "[a-zA-Z0-9.#$%&'*+\\/=?^_`{|}~][a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*",
          "required": true,
          "placeholder": "email@example.com"
        },
        "question_text": "Email Address"
      },
      {
        "id": "age",
        "type": "boolean",
        "metadata": {
          "required": true
        },
        "question_text": "Are you 18 years of age or older?"
      }
    ]
  },
  handleSectionChange: (_, __, isValid) => {}
}

test('Section is rendered', async () => {
  render(<Section {...testSectionProps} />)

  expect(screen.getByText(/full name*/i)).toBeInTheDocument()
  expect(screen.getByText(/email address*/i)).toBeInTheDocument()
  expect(screen.getByText(/are you 18 years of age or older\?*/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /submit/i })).toHaveAttribute('disabled')
});

test('Button is disabled if not all mandatories field are filled in', async () => {
  render(<Section {...testSectionProps} />)

  expect(screen.getByRole('button', { name: /submit/i })).toHaveAttribute('disabled')
});

test('Button in enabled when mandatories fields are filled in', async () => {
  render(<Section {...testSectionProps} />)

  userEvent.type(screen.getByRole('textbox', { name: /full name\*/i }), 'laura')
  userEvent.type(screen.getByRole('textbox', { name: /email address*/i }), 'laura@email.com')
  expect(screen.getByRole('button', { name: /submit/i })).not.toHaveAttribute('disabled')
});