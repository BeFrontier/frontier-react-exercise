/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Fragment } from 'react';

import { Label } from './Label';
import { useField } from 'formik';
import { ErrorText } from './ErrorText';

type Props = { id: string; labelText: string; required: boolean; name: string };

export function CheckBox({ id, labelText, required, name }: Props) {
  const [field, meta] = useField({
    name,
    validate: (value: string) => {
      if (required && value === undefined) return 'This field is required.';
    },
    type: 'checkbox',
  });

  const isError = meta.error && meta.touched;
  return (
    <Fragment>
      <div>
        <input {...field} type="checkbox" id={id} />
        <Label id={id} text={labelText} required={required} />
      </div>
      {isError && <ErrorText text={meta.error} />}
    </Fragment>
  );
}
