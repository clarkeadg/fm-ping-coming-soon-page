import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import ComingSoon from './ComingSoon';

describe('Renders component correctly', async () => {

  const { container } = render(
    <ComingSoon/>
  );

  const title = container.querySelector('h1');
  
  it('Should have an h1 tag', async () => {  
    expect(title).not.toBeNull();
  });

  it('Should have an error message', async () => {  
    fireEvent.click(screen.getByText('Notify Me'));
    const errorMessage = container.querySelector('.error-message');
    expect(errorMessage).not.toBeNull();
  });
});