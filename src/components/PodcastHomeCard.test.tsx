import { fireEvent, render } from '@testing-library/react';
import PodcastHomeCard from './PodcastHomeCard';

describe('PodcastHomeCard', () => {
  it('should render PodcastHomeCard correctly', () => {
    const { getByRole } = render(<PodcastHomeCard />);
    const podcastHomeCardRole = getByRole('podcast-home-card');
    expect(podcastHomeCardRole).toBeInTheDocument();
  });

  it('should renders PodcastHomeCard unchanged', () => {
    const { container } = render(<PodcastHomeCard />);
    expect(container).toMatchSnapshot();
  });
});
