import React from 'react';
import styled from '@emotion/styled';

type Props = {
  bgColor?: string;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = styled('button', { label: 'Button' })<Props>(
  {
    padding: '6px 16px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '13px',
    lineHeight: '1.42857143',
    margin: 0,
    whiteSpace: 'nowrap',
    ':disabled': { opacity: 0.95 },
    ':hover': { filter: 'brightness(95%)' },
  },
  ({ bgColor, disabled = false }) => ({
    backgroundColor: disabled ? 'light-grey' : bgColor,
    ...(disabled ? { cursor: 'not-allowed', border: '1px solid' } : {}),
  }),
);
