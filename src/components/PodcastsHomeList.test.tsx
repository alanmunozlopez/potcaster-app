import { render } from '@testing-library/react';
import PodcastsHomeList from './PodcastsHomeList';

describe('PodcastsHomeList', () => {
  it('should render PodcastInfo correctly', () => {
    const { getByRole } = render(<PodcastsHomeList />);
    const PodcastsHomeRole = getByRole('podcast-home-list');
    expect(PodcastsHomeRole).toBeInTheDocument();
  });

  it('should renders PodcastsHomeList unchanged', () => {
    const { container } = render(<PodcastsHomeList />);
    expect(container).toMatchSnapshot();
  });
});
