/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';

import { useTheme } from '../hooks/useTheme';

type Props = {
  children: ReactNode;
};

export function MainContainer({ children }: Props) {
  const theme = useTheme();

  return (
    <div
      css={{
        backgroundColor: theme.background_color,
        fontSize: '13px',
        fontFamily: 'arial',
        color: theme.text_color,
        borderRadius: '5px',
        margin: '10px 0',
        padding: '0 20px',
        width: '600px',
      }}
    >
      {children}
    </div>
  );
}
