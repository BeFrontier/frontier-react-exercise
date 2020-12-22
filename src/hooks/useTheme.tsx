import React from 'react';

export const ThemeContext = React.createContext<Frontier.Theme>({
  primary_color: 'red',
  secondary_color: 'green',
  background_color: 'gray',
  text_color: 'black',
});

export const useTheme = (): Frontier.Theme =>
  React.useContext(ThemeContext as React.Context<Frontier.Theme>);
