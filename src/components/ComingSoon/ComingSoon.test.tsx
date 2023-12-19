import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import ComingSoon from './ComingSoon';

describe('Renders component correctly', async () => {

  const { container } = render(
    <ComingSoon/>
  );

  const title = container.querySelector('h1');
  
  it('Should have an h1 tag', async () => {  
    expect(title).not.toBeNull();
  });
});