import { PodcastListResponse } from '@/models/podcasts.models';
import { EpisodesListResponse } from '@/models/episodes.models';

export const getPodcastList = async (): Promise<
  PodcastListResponse | undefined
> => {
  try {
    const data = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    );
    return data.json();
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const getEpisodes = async (
  id: string,
): Promise<EpisodesListResponse | undefined> => {
  try {
    const data = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
      { next: { revalidate: 86400 } },
    );
    return data.json();
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
