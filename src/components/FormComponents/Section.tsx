/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { GenericField } from './GenericField';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  index: number;
} & Frontier.Section;

export function Section({ id, title, content, index }: Props) {
  const theme = useTheme();

  return (
    <fieldset
      id={id}
      css={{
        border: 'none',
        borderRadius: '5px',
        padding: '0 20px 10px 20px',
        backgroundColor: 'white',
      }}
    >
      <legend
        css={{
          fontWeight: 'bold',
          fontSize: '16px',
          color: theme.secondary_color,
          paddingTop: '45px',
        }}
      >
        {title}
      </legend>
      <div
        css={{
          height: '2px',
          width: '100%',
          backgroundColor: theme.secondary_color,
          marginBottom: '10px',
        }}
      />
      {content.map(element => (
        <div key={element.id} css={{ marginBottom: '10px' }}>
          <GenericField name={`sections.${index}.field-${element.id}`} {...element} />
        </div>
      ))}
    </fieldset>
  );
}
