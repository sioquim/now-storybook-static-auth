import React from 'react';
import { render } from '@testing-library/react';

import Cowsay from './cowsay';

describe(' Cowsay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cowsay />);
    expect(baseElement).toBeTruthy();
  });
});
