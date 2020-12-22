/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Form, Formik } from 'formik';

import { Section } from './Section';
import { Button } from './Button';
import { useTheme } from '../../hooks/useTheme';
import { MainContainer } from '../MainContainer';

type ElementValueType = { [key: string]: string | undefined | number };

type Props = {
  sections: Array<Frontier.Section>;
};

export function FormContainer({ sections }: Props) {
  const theme = useTheme();

  const buildInitialValuesForSection = (section: Frontier.Section) => {
    let sectionInitialValues: ElementValueType = {};

    section.content.forEach(element => {
      const elementKey = `field-${element.id}`;
      if (element.type === 'boolean') {
        sectionInitialValues[elementKey] = undefined;
        return;
      }
      if (element.type === 'text' && element.metadata.format === 'number') {
        sectionInitialValues[elementKey] = '';
        return;
      }
      sectionInitialValues[elementKey] = '';
    });

    return sectionInitialValues;
  };

  const initialValues: { sections: Array<ElementValueType> } = {
    sections: sections.map(section => buildInitialValuesForSection(section)),
  };

  const onSubmit = (values: { sections: Array<ElementValueType> }) =>
    console.log('values: ', JSON.stringify(values, null, 2));

  return (
    <MainContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ errors }) => (
          <Form>
            {sections.map((section, index) => (
              <Section index={index} key={section.id} {...section} />
            ))}
            <div css={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 0' }}>
              <Button bgColor={theme.secondary_color} type="submit" disabled={!!errors.sections}>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </MainContainer>
  );
}
