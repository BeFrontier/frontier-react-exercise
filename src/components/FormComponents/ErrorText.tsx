/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  text?: string;
};

export function ErrorText({ text }: Props) {
  const theme = useTheme();

  if (!text) {
    return null;
  }
  return (
    <div
      css={{
        color : theme.primary_color,
        fontSize: '12px'
      }}
    >
      {text}
    </div>
  );
}
