import { render } from '@testing-library/react';
import EpisodeCardItem from './EpisodeCardItem';

describe('EpisodeCardItem', () => {
  it('should render EpisodeCardItem correctly', () => {
    const { getByRole } = render(<EpisodeCardItem />);
    const episodeCardItemRole = getByRole('episode-card-item');
    expect(episodeCardItemRole).toBeInTheDocument();
  });

  it('should renders EpisodeCardItem unchanged', () => {
    const { container } = render(<EpisodeCardItem />);
    expect(container).toMatchSnapshot();
  });
});
