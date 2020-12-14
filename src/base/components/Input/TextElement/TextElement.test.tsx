import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import ElementProps from '../../element-props';
import TextElement from './TextElement';

const testElementProps: ElementProps<string> = {
  element: {
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
  handleChange: (_, __, isValid) => {}
}

test('Element is rendered with its label', async () => {
  render(<TextElement {...testElementProps} />)
  expect(screen.getByLabelText('Email Address*')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('email@example.com')).toBeInTheDocument()
});

test('Invalid email field', () => {
  render(<TextElement {...testElementProps} />)

  userEvent.type(screen.getByRole('textbox'), 'laura')
  expect(screen.getByRole('textbox')).toHaveClass('invalid')
})

test('Valid email field', () => {
  render(<TextElement {...testElementProps} />)

  userEvent.type(screen.getByRole('textbox'), 'laura@email.com')
  expect(screen.getByRole('textbox')).toHaveClass('valid')
})
