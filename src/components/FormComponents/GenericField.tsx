import React from 'react';

import { CheckBox } from './CheckBox';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Select } from './Select';

type Props = {
  name: string;
} & Frontier.Element;

export function GenericField({ id, type, question_text, metadata, name }: Props) {
  switch (type) {
    case 'boolean':
      return (
        <CheckBox name={name} id={id} labelText={question_text} required={metadata.required} />
      );
    case 'text':
      return (
        <Input
          name={name}
          id={id}
          labelText={question_text}
          required={metadata.required}
          placeholder={metadata.placeholder}
          format={metadata.format}
          step={metadata.step}
          pattern={metadata.pattern}
        />
      );
    case 'textarea':
      return (
        <Textarea
          name={name}
          id={id}
          labelText={question_text}
          required={metadata.required}
          placeholder={metadata.placeholder}
        />
      );
    case 'multichoice':
      return (
        <Select
          name={name}
          id={id}
          labelText={question_text}
          required={metadata.required}
          options={metadata.options}
        />
      );
    default:
      return null;
  }
}
