/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import React, { Fragment } from 'react';
import { Label } from './Label';
import { useField } from 'formik';
import { ErrorText } from './ErrorText';

type Props = {
  id: string;
  name: string;
  labelText: string;
  required: boolean;
  options?: Array<{ label: string; value: string }>;
};

export function Select({ id, name, labelText, required, options }: Props) {
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
        <select
          {...field}
          name={name}
          id={id}
          css={{
            padding: '5px',
            borderRadius: '3px',
            border: '1px solid',
            minWidth: '200px',
            width: '100%',
            boxSizing: 'border-box',
            ...(isError ? { borderColor: 'red' } : {}),
          }}
        >
          <option value="">--</option>
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {isError && <ErrorText text={meta.error} />}
    </Fragment>
  );
}
