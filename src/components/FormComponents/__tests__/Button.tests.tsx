import React from 'react';

import { render } from '@testing-library/react';
import { Button } from '../Button';

function renderAndGetButton(ui: React.ReactElement) {
  const result = render(ui);
  const button = result.getByText('button');

  return { ...result, button };
}

describe('Button', () => {
  describe('disabled prop', () => {
    it('is by default enabled', () => {
      const { button } = renderAndGetButton(<Button>button</Button>);

      expect(button).not.toBeDisabled();
      expect(button).toHaveStyle({
        cursor: 'pointer',
      });
    });

    it('disabled makes button disabled', () => {
      const { button } = renderAndGetButton(<Button disabled>button</Button>);

      expect(button).toBeDisabled();
      expect(button).toHaveStyle({
        cursor: 'not-allowed',
      });
    });
  });
});