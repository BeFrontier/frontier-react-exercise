import React, { useContext } from 'react';
import '../../styles/grid.scss';
import { ThemeContext } from '../../../components/App'

export default function Label(labelMeta: Frontier.LabelType) {
  const theme = useContext(ThemeContext)
  const required = () => {
    return labelMeta.required ? `${labelMeta.question_text}*` : `${labelMeta.question_text}`
  }

  return (
    <label
      id={`${labelMeta.id}-label`}
      htmlFor={labelMeta.id}
      className={labelMeta.required ? 'required col-xs-12 col-md-6 col-l-4' : 'col-xs-12 col-md-6 col-l-4'}
      style={{color: theme.text_color, }}
    >
      { required() }
    </label>
  );
}

