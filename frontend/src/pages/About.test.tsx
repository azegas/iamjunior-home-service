import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Us page', () => {
  it('renders About Us text', () => {
    render(<About />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
});
