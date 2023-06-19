import { render } from '@testing-library/react';
import PodcastInfo from './PodcastInfo';

describe('PodcastInfo', () => {
  it('should render PodcastInfo correctly', () => {
    const { getByRole } = render(<PodcastInfo />);
    const headerRole = getByRole('podcast-info');
    expect(headerRole).toBeInTheDocument();
  });

  it('should renders PodcastInfo unchanged', () => {
    const { container } = render(<PodcastInfo />);
    expect(container).toMatchSnapshot();
  });
});
