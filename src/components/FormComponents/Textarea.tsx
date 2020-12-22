/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import React, { Fragment } from 'react';
import { useField } from 'formik';

import { Label } from './Label';
import { ErrorText } from './ErrorText';

type Props = {
  id: string;
  name: string;
  labelText: string;
  required: boolean;
  placeholder?: string;
};

export function Textarea({ id, labelText, required, placeholder, name }: Props) {
  const [field, meta] = useField({
    name,
    validate: (value: string) => {
      if (required && !value) return 'This field is required.';
    },
  });

  const isError = meta.error && meta.touched;

  return (
    <Fragment>
      <div>
        <Label id={id} text={labelText} required={required} />
      </div>
      <div>
        <textarea
          {...field}
          css={{
            padding: '5px',
            borderRadius: '3px',
            border: '1px solid',
            width: '100%',
            boxSizing: 'border-box',
            ...(isError ? { borderColor: 'red' } : {}),
          }}
          id={id}
          placeholder={placeholder}
          rows={5}
        />
      </div>
      {isError && <ErrorText text={meta.error} />}
    </Fragment>
  );
}
