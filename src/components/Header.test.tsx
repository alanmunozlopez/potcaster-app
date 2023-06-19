import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render Header correctly', () => {
    const { getByRole } = render(<Header />);
    const headerRole = getByRole('header');
    expect(headerRole).toBeInTheDocument();
  });

  it('should renders Header unchanged', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
