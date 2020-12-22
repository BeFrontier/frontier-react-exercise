/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import React, { InputHTMLAttributes, Fragment } from 'react';
import { Label } from './Label';
import { useField } from 'formik';
import { ErrorText } from './ErrorText';

type Props = {
  id: string;
  labelText: string;
  required: boolean;
  placeholder?: string;
  format?: 'text' | 'email' | 'number';
  step?: number;
  pattern?: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  id,
  labelText,
  required,
  placeholder,
  format,
  step,
  pattern,
  name,
}: Props) {
  const [field, meta] = useField({
    name,
    validate: (value: string) => {
      if (required && !value) return 'This field is required.';

      if (format === 'email' && pattern) {
        const regex = RegExp(pattern);
        return regex.test(value) ? '' : 'Invalid email address';
      }
    },
    type: format,
  });

  const isError = meta.error && meta.touched;
  return (
    <Fragment>
      <div>
        <Label id={id} text={labelText} required={required} />
      </div>
      <div>
        <input
          {...field}
          css={{
            padding: '5px',
            borderRadius: '3px',
            border: '1px solid',
            minWidth: '200px',
            width: '100%',
            boxSizing: 'border-box',
            ...(isError ? { borderColor: 'red' } : {}),
          }}
          id={id}
          type={format || 'text'}
          step={format === 'number' ? step : undefined}
          pattern={format === 'email' ? pattern : undefined}
          placeholder={placeholder}
        />
        {isError && <ErrorText text={meta.error} />}
      </div>
    </Fragment>
  );
}
