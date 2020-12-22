/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { useTheme } from '../../hooks/useTheme';

type Props = {
  id: string;
  text: string;
  required: boolean;
};
export function Label({ id, text, required }: Props) {
  const theme = useTheme();
  return (
    <label htmlFor={id}>
      {text}
      <span css={{ color: theme.primary_color }}>
        <b>{required && ' *'}</b>
      </span>
    </label>
  );
}
