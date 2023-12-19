import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe('Renders App component correctly', async () => {

  const { container } = render(
    <App/>
  );

  const main = container.querySelector('main');
  const title = container.querySelector('h1');
  
  it('Should have a main tag', async () => {  
    expect(main).not.toBeNull();
  });

  it('Should have an h1 tag', async () => {  
    expect(title).not.toBeNull();
  });
});